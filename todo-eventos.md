# TODO - Frontend Público de Eventos

## Páginas a Desenvolver

- [x] EventList.tsx - Listagem de eventos disponíveis
- [x] EventDetails.tsx - Detalhes do evento com lotes (inclui formulário e pagamento)
- [x] RegistrationSuccess.tsx - Página de confirmação

## Componentes

- [ ] EventCard.tsx - Card de evento na listagem
- [ ] BatchSelector.tsx - Seletor de lotes
- [ ] CouponInput.tsx - Campo de cupom de desconto
- [ ] DynamicFormField.tsx - Campo dinâmico do formulário
- [ ] PaymentSummary.tsx - Resumo do pagamento

## API Integration

- [x] eventsApi.ts - Helper para chamadas à API
- [x] Listar eventos públicos
- [x] Buscar detalhes do evento
- [x] Validar cupom
- [x] Verificar disponibilidade de lotes
- [x] Processar inscrição
- [x] Consultar inscrição por código

## Funcionalidades

- [x] Listagem de eventos ativos
- [x] Seleção de quantidade de inscrições
- [x] Formulário do comprador (1x)
- [x] Formulário dos inscritos (Nx)
- [x] Aplicação de cupom de desconto
- [x] Cálculo de valor total
- [x] Integração com Cielo
- [x] Geração de código de pedido
- [x] Página de confirmação
- [x] Consulta de inscrição

## Validações

- [ ] Campos obrigatórios
- [ ] Validação de email
- [ ] Validação de CPF
- [ ] Validação de telefone
- [ ] Validação de cartão de crédito
- [ ] Verificação de disponibilidade de vagas

## Deploy

- [ ] Configurar variáveis de ambiente
- [ ] Build de produção
- [ ] Deploy no servidor

## Bugs a Corrigir

- [x] Corrigir import useNavigate (wouter usa useLocation)
- [x] Configurar .env com OAUTH_SERVER_URL
