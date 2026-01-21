import { useState, useEffect } from 'react';
import { useRoute, useLocation } from 'wouter';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Calendar, MapPin, Users, Tag, Loader2, ArrowLeft, CreditCard } from 'lucide-react';
import { toast } from 'sonner';
import {
  buscarEventoPublico,
  listarLotesPublicos,
  listarCamposFormulario,
  validarCupom,
  processarInscricao,
  buscarFormasPagamento,
  type Event,
  type EventBatch,
  type FormField,
  type PaymentOption,
} from '@/lib/eventsApi';

export default function EventDetails() {
  const [, setLocation] = useLocation();
  
  // Extrair ID da URL diretamente (UUID string)
  const pathParts = window.location.pathname.split('/');
  const eventId = pathParts[pathParts.length - 1];

  const [evento, setEvento] = useState<Event | null>(null);
  const [lotes, setLotes] = useState<EventBatch[]>([]);
  const [campos, setCampos] = useState<FormField[]>([]);
  const [formasPagamento, setFormasPagamento] = useState<PaymentOption[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);

  // Estado do formulário
  const [loteId, setLoteId] = useState<number | null>(null);
  const [quantidade, setQuantidade] = useState(1);
  const [cupomCodigo, setCupomCodigo] = useState('');
  const [cupomValido, setCupomValido] = useState<any>(null);
  const [validandoCupom, setValidandoCupom] = useState(false);
  const [dadosComprador, setDadosComprador] = useState<Record<string, any>>({});
  const [dadosInscritos, setDadosInscritos] = useState<Record<string, any>[]>([{}]);
  const [formaPagamento, setFormaPagamento] = useState<string>(''); // ID da forma de pagamento
  const [parcelas, setParcelas] = useState(1);
  const [dadosPagamento, setDadosPagamento] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    securityCode: '',
  });

  useEffect(() => {
    carregarDados();
  }, [eventId]);

  useEffect(() => {
    // Ajustar array de inscritos quando quantidade mudar
    setDadosInscritos(Array.from({ length: quantidade }, (_, i) => dadosInscritos[i] || {}));
  }, [quantidade]);

  const carregarDados = async () => {
    try {
      setLoading(true);
      const [eventoData, lotesData, camposData, formasPagamentoData] = await Promise.all([
        buscarEventoPublico(eventId),
        listarLotesPublicos(eventId),
        listarCamposFormulario(eventId),
        buscarFormasPagamento(eventId),
      ]);
      setEvento(eventoData);
      setLotes(lotesData.filter((l) => l.isActive));
      setCampos(camposData);
      setFormasPagamento(formasPagamentoData.filter((f) => f.isActive));
    } catch (error) {
      console.error('Erro ao carregar dados:', error);
      toast.error('Erro ao carregar evento');
    } finally {
      setLoading(false);
    }
  };

  const handleValidarCupom = async () => {
    if (!cupomCodigo || !loteId) return;

    try {
      setValidandoCupom(true);
      const resultado = await validarCupom(cupomCodigo, eventId, loteId);
      if (resultado.valid) {
        setCupomValido(resultado.coupon);
        toast.success('Cupom aplicado com sucesso!');
      } else {
        setCupomValido(null);
        toast.error(resultado.message || 'Cupom inválido');
      }
    } catch (error) {
      toast.error('Erro ao validar cupom');
    } finally {
      setValidandoCupom(false);
    }
  };

  const calcularValorTotal = () => {
    const lote = lotes.find((l) => l.id === loteId);
    if (!lote) return 0;

    let total = Number(lote.price) * quantidade;

    if (cupomValido) {
      if (cupomValido.discountType === 'percentage') {
        total -= total * (Number(cupomValido.discountValue) / 100);
      } else {
        total -= Number(cupomValido.discountValue);
      }
    }

    // Aplicar juros se houver parcelas
    if (formaPagamento && parcelas > 1) {
      const pagamento = formasPagamento.find((f) => f.id.toString() === formaPagamento);
      if (pagamento && pagamento.interestRate > 0) {
        if (pagamento.interestType === 'percentage') {
          // Juros percentual por parcela
          total += total * (Number(pagamento.interestRate) / 100) * (parcelas - 1);
        } else {
          // Juros fixo por parcela
          total += Number(pagamento.interestRate) * (parcelas - 1);
        }
      }
    }

    return Math.max(0, total);
  };

  const validarFormulario = () => {
    // Validar lote
    if (!loteId) {
      toast.error('Selecione um lote');
      return false;
    }

    // Validar campos do comprador
    const camposComprador = campos.filter((c) => c.section === 'buyer');
    for (const campo of camposComprador) {
      if (campo.isRequired && !dadosComprador[campo.fieldName]) {
        toast.error(`Campo obrigatório: ${campo.label}`);
        return false;
      }
    }

    // Validar campos dos inscritos
    const camposInscrito = campos.filter((c) => c.section === 'attendee');
    for (let i = 0; i < quantidade; i++) {
      for (const campo of camposInscrito) {
        if (campo.isRequired && !dadosInscritos[i]?.[campo.fieldName]) {
          toast.error(`Inscrito ${i + 1}: Campo obrigatório - ${campo.label}`);
          return false;
        }
      }
    }

    // Validar dados de pagamento
    if (!dadosPagamento.cardNumber || !dadosPagamento.cardHolder || 
        !dadosPagamento.expirationDate || !dadosPagamento.securityCode) {
      toast.error('Preencha todos os dados do cartão');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validarFormulario()) return;

    try {
      setSubmitting(true);
      const resultado = await processarInscricao({
        eventId,
        batchId: loteId!,
        quantity: quantidade,
        buyerData: dadosComprador,
        attendeesData: dadosInscritos,
        couponCode: cupomValido ? cupomCodigo : undefined,
        paymentData: dadosPagamento,
      });

      if (resultado.success) {
        toast.success('Inscrição realizada com sucesso!');
        setLocation(`/inscricao/${resultado.orderCode}`);
      }
    } catch (error: any) {
      console.error('Erro ao processar inscrição:', error);
      toast.error(error.response?.data?.message || 'Erro ao processar inscrição');
    } finally {
      setSubmitting(false);
    }
  };

  const renderCampo = (campo: FormField, valor: any, onChange: (value: any) => void) => {
    const commonProps = {
      id: campo.fieldName,
      placeholder: campo.placeholder,
      required: campo.isRequired,
    };

    switch (campo.fieldType) {
      case 'text':
      case 'email':
      case 'phone':
      case 'cpf':
        return <Input {...commonProps} type={campo.fieldType === 'email' ? 'email' : 'text'} value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'number':
        return <Input {...commonProps} type="number" value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'date':
        return <Input {...commonProps} type="date" value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'textarea':
        return <Textarea {...commonProps} value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'select':
        return (
          <Select value={valor || ''} onValueChange={onChange}>
            <SelectTrigger>
              <SelectValue placeholder={campo.placeholder || 'Selecione...'} />
            </SelectTrigger>
            <SelectContent>
              {campo.options?.map((opt) => (
                <SelectItem key={opt} value={opt}>{opt}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      
      case 'radio':
        return (
          <RadioGroup value={valor || ''} onValueChange={onChange}>
            {campo.options?.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <RadioGroupItem value={opt} id={`${campo.fieldName}-${opt}`} />
                <Label htmlFor={`${campo.fieldName}-${opt}`}>{opt}</Label>
              </div>
            ))}
          </RadioGroup>
        );
      
      case 'checkbox':
        return (
          <div className="space-y-2">
            {campo.options?.map((opt) => (
              <div key={opt} className="flex items-center space-x-2">
                <Checkbox
                  id={`${campo.fieldName}-${opt}`}
                  checked={Array.isArray(valor) && valor.includes(opt)}
                  onCheckedChange={(checked) => {
                    const newValue = Array.isArray(valor) ? [...valor] : [];
                    if (checked) {
                      newValue.push(opt);
                    } else {
                      const index = newValue.indexOf(opt);
                      if (index > -1) newValue.splice(index, 1);
                    }
                    onChange(newValue);
                  }}
                />
                <Label htmlFor={`${campo.fieldName}-${opt}`}>{opt}</Label>
              </div>
            ))}
          </div>
        );
      
      default:
        return <Input {...commonProps} value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (!evento) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Card>
          <CardContent className="pt-6">
            <p>Evento não encontrado</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const camposComprador = campos.filter((c) => c.section === 'buyer').sort((a, b) => a.orderIndex - b.orderIndex);
  const camposInscrito = campos.filter((c) => c.section === 'attendee').sort((a, b) => a.orderIndex - b.orderIndex);
  const loteAtual = lotes.find((l) => l.id === loteId);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="container max-w-4xl mx-auto">
        <Button variant="ghost" onClick={() => setLocation('/')} className="mb-6">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Voltar
        </Button>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Informações do Evento */}
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{evento.title}</CardTitle>
              <CardDescription>{evento.description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-2 text-sm">
                <Calendar className="h-4 w-4" />
                <span>{new Date(evento.startDate).toLocaleDateString('pt-BR')}</span>
              </div>
              {evento.location && (
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="h-4 w-4" />
                  <span>{evento.location}</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Seleção de Lote e Quantidade */}
          <Card>
            <CardHeader>
              <CardTitle>Selecione o Lote e Quantidade</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Lote</Label>
                <Select value={loteId?.toString() || ''} onValueChange={(v) => setLoteId(Number(v))}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um lote" />
                  </SelectTrigger>
                  <SelectContent>
                    {lotes.map((lote) => (
                      <SelectItem key={lote.id} value={lote.id.toString()}>
                        {lote.name} - R$ {Number(lote.price).toFixed(2)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Quantidade de Inscrições</Label>
                <Input
                  type="number"
                  min="1"
                  max={evento.maxPerBuyer || 10}
                  value={quantidade}
                  onChange={(e) => {
                    const valor = Number(e.target.value);
                    const limite = evento.maxPerBuyer || 10;
                    
                    // Não permitir valores maiores que o limite
                    if (valor > limite) {
                      toast.error(`Máximo de ${limite} inscrição(ões) por comprador`);
                      setQuantidade(limite);
                    } else if (valor < 1) {
                      setQuantidade(1);
                    } else {
                      setQuantidade(valor);
                    }
                  }}
                />
                {evento.maxPerBuyer && (
                  <p className="text-sm text-gray-500 mt-1">
                    Máximo {evento.maxPerBuyer} inscrição(ões) por comprador
                  </p>
                )}
              </div>

              {/* Cupom */}
              <div className="flex gap-2">
                <div className="flex-1">
                  <Label>Cupom de Desconto (opcional)</Label>
                  <Input
                    value={cupomCodigo}
                    onChange={(e) => setCupomCodigo(e.target.value.toUpperCase())}
                    placeholder="Digite o código"
                  />
                </div>
                <Button
                  type="button"
                  onClick={handleValidarCupom}
                  disabled={!cupomCodigo || !loteId || validandoCupom}
                  className="mt-auto"
                >
                  {validandoCupom ? <Loader2 className="h-4 w-4 animate-spin" /> : 'Aplicar'}
                </Button>
              </div>

              {cupomValido && (
                <Badge variant="secondary" className="w-fit">
                  <Tag className="h-3 w-3 mr-1" />
                   Desconto aplicado: {cupomValido.discountType === 'percentage' ? `${cupomValido.discountValue}%` : `R$ ${Number(cupomValido.discountValue).toFixed(2)}`}
                </Badge>
              )}

              {/* Resumo */}
              {loteAtual && (
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ {(Number(loteAtual.price) * quantidade).toFixed(2)}</span>
                  </div>
                  {cupomValido && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto:</span>
                      <span>- R$ {((Number(loteAtual.price) * quantidade) - calcularValorTotal()).toFixed(2)}</span>
                    </div>
                  )}
                  <Separator />
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total:</span>
                    <span>R$ {calcularValorTotal().toFixed(2)}</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Dados do Comprador */}
          {camposComprador.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle>Dados do Comprador</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {camposComprador.map((campo) => (
                  <div key={campo.id}>
                    <Label htmlFor={campo.fieldName}>
                      {campo.label}
                      {campo.isRequired && <span className="text-red-500 ml-1">*</span>}
                    </Label>
                    {renderCampo(campo, dadosComprador[campo.fieldName], (value) =>
                      setDadosComprador({ ...dadosComprador, [campo.fieldName]: value })
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          )}

          {/* Dados dos Inscritos */}
          {camposInscrito.length > 0 && dadosInscritos.map((_, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>Dados do Inscrito {index + 1}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {camposInscrito.map((campo) => (
                  <div key={campo.id}>
                    <Label htmlFor={`${campo.fieldName}-${index}`}>
                      {campo.label}
                      {campo.isRequired && <span className="text-red-500 ml-1">*</span>}
                    </Label>
                    {renderCampo(campo, dadosInscritos[index]?.[campo.fieldName], (value) => {
                      const newDados = [...dadosInscritos];
                      newDados[index] = { ...newDados[index], [campo.fieldName]: value };
                      setDadosInscritos(newDados);
                    })}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}

          {/* Forma de Pagamento */}
          {formasPagamento.length > 0 && (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CreditCard className="h-5 w-5" />
                  Forma de Pagamento
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <Label>Selecione a forma de pagamento</Label>
                  <Select value={formaPagamento} onValueChange={setFormaPagamento}>
                    <SelectTrigger>
                      <SelectValue placeholder="Escolha uma opção" />
                    </SelectTrigger>
                    <SelectContent>
                      {formasPagamento.map((forma) => (
                        <SelectItem key={forma.id} value={forma.id.toString()}>
                          {forma.paymentType === 'credit_card' && 'Cartão de Crédito'}
                          {forma.paymentType === 'pix' && 'PIX'}
                          {forma.paymentType === 'boleto' && 'Boleto'}
                          {forma.paymentType === 'credit_card' && forma.maxInstallments > 1 && ` (até ${forma.maxInstallments}x)`}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                
                {/* Parcelas (apenas para cartão) */}
                {formaPagamento && formasPagamento.find((f) => f.id.toString() === formaPagamento)?.paymentType === 'credit_card' && (
                  <div>
                    <Label>Número de Parcelas</Label>
                    <Select value={parcelas.toString()} onValueChange={(v) => setParcelas(parseInt(v))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          { length: formasPagamento.find((f) => f.id.toString() === formaPagamento)?.maxInstallments || 1 },
                          (_, i) => i + 1
                        ).map((p) => {
                          const pagamento = formasPagamento.find((f) => f.id.toString() === formaPagamento);
                          const valorParcela = calcularValorTotal() / p;
                          const semJuros = !pagamento || pagamento.interestRate === 0 || p === 1;
                          return (
                            <SelectItem key={p} value={p.toString()}>
                              {p}x de R$ {valorParcela.toFixed(2)}
                              {semJuros ? ' sem juros' : ` (${pagamento.interestRate}% ${pagamento.interestType === 'percentage' ? 'a.m.' : 'fixo'})`}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>
                  </div>
                )}
                
                {/* Dados do Cartão (apenas para cartão) */}
                {formaPagamento && formasPagamento.find((f) => f.id.toString() === formaPagamento)?.paymentType === 'credit_card' && (
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="font-medium">Dados do Cartão</h4>
                    <div>
                      <Label>Número do Cartão</Label>
                      <Input
                        placeholder="0000 0000 0000 0000"
                        value={dadosPagamento.cardNumber}
                        onChange={(e) => setDadosPagamento({ ...dadosPagamento, cardNumber: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label>Nome no Cartão</Label>
                      <Input
                        placeholder="NOME COMPLETO"
                        value={dadosPagamento.cardHolder}
                        onChange={(e) => setDadosPagamento({ ...dadosPagamento, cardHolder: e.target.value.toUpperCase() })}
                        required
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label>Validade (MM/AA)</Label>
                        <Input
                          placeholder="12/28"
                          value={dadosPagamento.expirationDate}
                          onChange={(e) => setDadosPagamento({ ...dadosPagamento, expirationDate: e.target.value })}
                          required
                        />
                      </div>
                      <div>
                        <Label>CVV</Label>
                        <Input
                          placeholder="123"
                          type="password"
                          maxLength={4}
                          value={dadosPagamento.securityCode}
                          onChange={(e) => setDadosPagamento({ ...dadosPagamento, securityCode: e.target.value })}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mensagem para PIX/Boleto */}
                {formaPagamento && ['pix', 'boleto'].includes(formasPagamento.find((f) => f.id.toString() === formaPagamento)?.paymentType || '') && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      {formasPagamento.find((f) => f.id.toString() === formaPagamento)?.paymentType === 'pix'
                        ? 'Após finalizar a inscrição, você receberá o QR Code do PIX para pagamento.'
                        : 'Após finalizar a inscrição, você receberá o boleto para pagamento.'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Botão de Envio */}
          <Button type="submit" size="lg" className="w-full" disabled={submitting || !loteId}>
            {submitting ? (
              <>
                <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              `Finalizar Inscrição - R$ ${calcularValorTotal().toFixed(2)}`
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
