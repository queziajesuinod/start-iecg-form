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
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Calendar, MapPin, Users, Tag, Loader2, ArrowLeft, CreditCard, Plus, Check, X } from 'lucide-react';
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
import { maskCPForCNPJ, maskPhone, validateCPForCNPJ, validateEmail, removeNonDigits, maskCreditCard, maskCardExpiry, maskCVV } from '@/lib/masks';

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
  const [cupomCodigo, setCupomCodigo] = useState('');
  const [cupomValido, setCupomValido] = useState<any>(null);
  const [validandoCupom, setValidandoCupom] = useState(false);
  const [dadosComprador, setDadosComprador] = useState<Record<string, any>>({});
  const [inscritos, setInscritos] = useState<Array<{
    dados: Record<string, any>;
    salvo: boolean;
    id: string;
    batchId: string | null;  // Lote específico do inscrito
  }>>([{ dados: {}, salvo: false, id: '1', batchId: null }]);
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

  const adicionarInscrito = () => {
    const limite = evento?.maxPerBuyer || 10;
    if (inscritos.length >= limite) {
      toast.error(`Máximo de ${limite} inscrição(ões) por comprador`);
      return;
    }
    setInscritos([...inscritos, { dados: {}, salvo: false, id: Date.now().toString(), batchId: null }]);
  };

  const removerInscrito = (id: string) => {
    if (inscritos.length === 1) {
      toast.error('É necessário pelo menos 1 inscrito');
      return;
    }
    setInscritos(inscritos.filter((i) => i.id !== id));
  };

  const salvarInscrito = (id: string) => {
    const inscrito = inscritos.find((i) => i.id === id);
    if (!inscrito) return;

    // Validar campos obrigatórios
    const camposInscrito = campos.filter((c) => c.section === 'attendee');
    for (const campo of camposInscrito) {
      if (campo.isRequired && !inscrito.dados[campo.fieldName]) {
        toast.error(`Campo obrigatório: ${campo.label}`);
        return;
      }
    }

    // Marcar como salvo
    setInscritos(inscritos.map((i) => (i.id === id ? { ...i, salvo: true } : i)));
    toast.success('Inscrito salvo!');
  };

  const atualizarDadosInscrito = (id: string, campo: string, valor: any) => {
    setInscritos(
      inscritos.map((i) =>
        i.id === id ? { ...i, dados: { ...i.dados, [campo]: valor }, salvo: false } : i
      )
    );
  };

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
    if (!cupomCodigo) return;
    
    // Usar o primeiro lote selecionado para validar cupom
    const primeiroLote = inscritos.find(i => i.batchId)?.batchId;
    if (!primeiroLote) {
      toast.error('Selecione um lote antes de validar o cupom');
      return;
    }

    try {
      setValidandoCupom(true);
      const resultado = await validarCupom(cupomCodigo, eventId, primeiroLote);
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
    // Somar preço de cada inscrito baseado no seu lote específico
    let total = 0;
    for (const inscrito of inscritos) {
      if (inscrito.batchId) {
        const lote = lotes.find((l) => l.id === inscrito.batchId);
        if (lote) {
          total += Number(lote.price);
        }
      }
    }
    
    if (total === 0) return 0;

    if (cupomValido) {
      if (cupomValido.discountType === 'percentage') {
        total -= total * (Number(cupomValido.discountValue) / 100);
      } else {
        total -= Number(cupomValido.discountValue);
      }
    }

    // Aplicar juros se houver parcelas
    if (formaPagamento && parcelas > 1) {
      const pagamento = formasPagamento.find((f) => f.id === formaPagamento);
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
    // Validar que todos os inscritos têm um lote selecionado
    const inscritosSemLote = inscritos.filter((i) => !i.batchId);
    if (inscritosSemLote.length > 0) {
      toast.error(`Selecione um lote para todos os inscritos`);
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

    // Validar se todos os inscritos foram salvos
    const inscritosNaoSalvos = inscritos.filter((i) => !i.salvo);
    if (inscritosNaoSalvos.length > 0) {
      toast.error(`Existem ${inscritosNaoSalvos.length} inscrito(s) não salvo(s). Salve todos antes de continuar.`);
      return false;
    }

    // Validar forma de pagamento selecionada
    if (!formaPagamento) {
      toast.error('Selecione uma forma de pagamento');
      return false;
    }

    // Validar dados de pagamento apenas para cartão de crédito
    const formaSelecionada = formasPagamento.find((f) => f.id === formaPagamento);
    if (formaSelecionada?.paymentType === 'credit_card') {
      if (!dadosPagamento.cardNumber || !dadosPagamento.cardHolder || 
          !dadosPagamento.expirationDate || !dadosPagamento.securityCode) {
        toast.error('Preencha todos os dados do cartão');
        return false;
      }
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
        quantity: inscritos.length,
        buyerData: dadosComprador,
        attendeesData: inscritos.map((i) => ({
          batchId: i.batchId!,
          data: i.dados
        })),
        couponCode: cupomValido ? cupomCodigo : undefined,
        paymentOptionId: formaPagamento,
        paymentData: {
          ...dadosPagamento,
          installments: parcelas
        },
      });

      if (resultado.success) {
        toast.success('Inscrição realizada com sucesso!');
        
        // Verificar tipo de pagamento
        const formaPagamentoSelecionada = formasPagamento.find(f => f.id === formaPagamento);
        
        if (formaPagamentoSelecionada?.paymentType === 'pix') {
          // Redirecionar para página de confirmação PIX
          const pixCode = resultado.registration?.pixQrCode || '';
          const qrCode = resultado.registration?.pixQrCodeBase64 || '';
          setLocation(`/pix-confirmacao?orderCode=${resultado.orderCode}&pixCode=${encodeURIComponent(pixCode)}&qrCode=${encodeURIComponent(qrCode)}`);
        } else {
          // Para cartão, redirecionar direto para o ticket
          setLocation(`/ticket/${resultado.orderCode}`);
        }
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
        return <Input {...commonProps} type="text" value={valor || ''} onChange={(e) => onChange(e.target.value)} />;
      
      case 'email':
        return (
          <Input 
            {...commonProps} 
            type="email" 
            value={valor || ''} 
            onChange={(e) => onChange(e.target.value)}
            onBlur={(e) => {
              if (e.target.value && !validateEmail(e.target.value)) {
                toast.error('Email inválido');
              }
            }}
          />
        );
      
      case 'phone':
        return (
          <Input 
            {...commonProps} 
            type="tel" 
            value={valor || ''} 
            onChange={(e) => {
              const masked = maskPhone(e.target.value);
              onChange(masked);
            }}
            maxLength={15}
          />
        );
      
      case 'cpf':
        return (
          <Input 
            {...commonProps} 
            type="text" 
            value={valor || ''} 
            onChange={(e) => {
              const masked = maskCPForCNPJ(e.target.value);
              onChange(masked);
            }}
            onBlur={(e) => {
              const digits = removeNonDigits(e.target.value);
              if (digits && !validateCPForCNPJ(e.target.value)) {
                toast.error(digits.length === 11 ? 'CPF inválido' : 'CNPJ inválido');
              }
            }}
            placeholder="CPF ou CNPJ"
            maxLength={18}
          />
        );
      
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
              <CardTitle>Quantidade de Inscrições</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Quantidade de inscrições:</strong> {inscritos.length}
                </p>
                <p className="text-xs text-blue-700 mt-1">
                  Use o botão "Adicionar Inscrito" na seção abaixo para adicionar mais inscrições
                  {evento.maxPerBuyer && ` (máximo ${evento.maxPerBuyer})`}
                </p>
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
                  disabled={!cupomCodigo || validandoCupom}
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
              {inscritos.some(i => i.batchId) && (
                <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ {inscritos.reduce((sum, i) => {
                      const lote = lotes.find(l => l.id === i.batchId);
                      return sum + (lote ? Number(lote.price) : 0);
                    }, 0).toFixed(2)}</span>
                  </div>
                  {cupomValido && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto:</span>
                      <span>- R$ {(inscritos.reduce((sum, i) => {
                        const lote = lotes.find(l => l.id === i.batchId);
                        return sum + (lote ? Number(lote.price) : 0);
                      }, 0) - calcularValorTotal()).toFixed(2)}</span>
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
          {camposInscrito.length > 0 && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Dados dos Inscritos</CardTitle>
                    <CardDescription>
                      {inscritos.length} inscrito(s) - {inscritos.filter((i) => i.salvo).length} salvo(s)
                    </CardDescription>
                  </div>
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={adicionarInscrito}
                    disabled={inscritos.length >= (evento?.maxPerBuyer || 10)}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Adicionar Inscrito
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {inscritos.map((inscrito, index) => (
                    <AccordionItem key={inscrito.id} value={inscrito.id}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-2 w-full">
                          <span className="font-medium">
                            Inscrito {index + 1}
                            {inscrito.batchId && (
                              <span className="text-muted-foreground font-normal ml-2">
                                - {lotes.find(l => l.id === inscrito.batchId)?.name}
                              </span>
                            )}
                          </span>
                          {inscrito.salvo ? (
                            <Badge variant="secondary" className="ml-2">
                              <Check className="h-3 w-3 mr-1" />
                              Salvo
                            </Badge>
                          ) : (
                            <Badge variant="destructive" className="ml-2">
                              <X className="h-3 w-3 mr-1" />
                              Não salvo
                            </Badge>
                          )}
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-4 pt-4">
                          {/* Seletor de Lote */}
                          <div>
                            <Label htmlFor={`lote-${inscrito.id}`}>
                              Lote
                              <span className="text-red-500 ml-1">*</span>
                            </Label>
                            <Select 
                              value={inscrito.batchId || ''} 
                              onValueChange={(v) => {
                                setInscritos(inscritos.map((i) => 
                                  i.id === inscrito.id ? { ...i, batchId: v } : i
                                ));
                              }}
                            >
                              <SelectTrigger id={`lote-${inscrito.id}`}>
                                <SelectValue placeholder="Selecione o lote" />
                              </SelectTrigger>
                              <SelectContent>
                                {lotes.map((lote) => (
                                  <SelectItem key={lote.id} value={lote.id}>
                                    {lote.name} - R$ {Number(lote.price).toFixed(2)}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          
                          {camposInscrito.map((campo) => (
                            <div key={campo.id}>
                              <Label htmlFor={`${campo.fieldName}-${inscrito.id}`}>
                                {campo.label}
                                {campo.isRequired && <span className="text-red-500 ml-1">*</span>}
                              </Label>
                              {renderCampo(
                                campo,
                                inscrito.dados[campo.fieldName],
                                (value) => atualizarDadosInscrito(inscrito.id, campo.fieldName, value)
                              )}
                            </div>
                          ))}
                          <div className="flex gap-2 pt-4">
                            <Button
                              type="button"
                              onClick={() => salvarInscrito(inscrito.id)}
                              disabled={inscrito.salvo}
                            >
                              <Check className="h-4 w-4 mr-2" />
                              Salvar Inscrito
                            </Button>
                            {inscritos.length > 1 && (
                              <Button
                                type="button"
                                variant="destructive"
                                onClick={() => removerInscrito(inscrito.id)}
                              >
                                <X className="h-4 w-4 mr-2" />
                                Remover
                              </Button>
                            )}
                          </div>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          )}

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
                {formaPagamento && formasPagamento.find((f) => f.id === formaPagamento)?.paymentType === 'credit_card' && (
                  <div>
                    <Label>Número de Parcelas</Label>
                    <Select value={parcelas.toString()} onValueChange={(v) => setParcelas(parseInt(v))}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {Array.from(
                          { length: formasPagamento.find((f) => f.id === formaPagamento)?.maxInstallments || 1 },
                          (_, i) => i + 1
                        ).map((p) => {
                          const pagamento = formasPagamento.find((f) => f.id === formaPagamento);
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
                {formaPagamento && formasPagamento.find((f) => f.id === formaPagamento)?.paymentType === 'credit_card' && (
                  <div className="space-y-4 pt-4 border-t">
                    <h4 className="font-medium">Dados do Cartão</h4>
                    <div>
                      <Label>Número do Cartão</Label>
                      <Input
                        placeholder="0000 0000 0000 0000"
                        value={dadosPagamento.cardNumber}
                        onChange={(e) => {
                          const masked = maskCreditCard(e.target.value);
                          setDadosPagamento({ ...dadosPagamento, cardNumber: masked });
                        }}
                        maxLength={19}
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
                        <Label>Validade (MM/AAAA)</Label>
                        <Input
                          placeholder="12/2030"
                          value={dadosPagamento.expirationDate}
                          onChange={(e) => {
                            const masked = maskCardExpiry(e.target.value);
                            setDadosPagamento({ ...dadosPagamento, expirationDate: masked });
                          }}
                          maxLength={7}
                          required
                        />
                      </div>
                      <div>
                        <Label>CVV</Label>
                        <Input
                          placeholder="123"
                          type="password"
                          value={dadosPagamento.securityCode}
                          onChange={(e) => {
                            const masked = maskCVV(e.target.value);
                            setDadosPagamento({ ...dadosPagamento, securityCode: masked });
                          }}
                          maxLength={4}
                          required
                        />
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Mensagem para PIX/Boleto */}
                {formaPagamento && ['pix', 'boleto'].includes(formasPagamento.find((f) => f.id === formaPagamento)?.paymentType || '') && (
                  <div className="p-4 bg-blue-50 rounded-lg">
                    <p className="text-sm text-blue-900">
                      {formasPagamento.find((f) => f.id === formaPagamento)?.paymentType === 'pix'
                        ? 'Após finalizar a inscrição, você receberá o QR Code do PIX para pagamento.'
                        : 'Após finalizar a inscrição, você receberá o boleto para pagamento.'}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {/* Botão de Envio */}
          <Button type="submit" size="lg" className="w-full" disabled={submitting}>
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
