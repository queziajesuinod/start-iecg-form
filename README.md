# START IECG - Orientando um Novo Começo

Formulário web responsivo mobile-first para cadastro de novos membros e direcionamento de células da IECG.

## 🚀 Desenvolvimento Local

### Pré-requisitos

- Node.js 18+ 
- pnpm (recomendado) ou npm

### Instalação

```bash
# Instalar pnpm globalmente (se ainda não tiver)
npm install -g pnpm

# Instalar dependências
pnpm install

# Iniciar servidor de desenvolvimento
pnpm dev
```

A aplicação estará disponível em `http://localhost:3000`

### Comandos Disponíveis

```bash
pnpm dev      # Desenvolvimento (hot reload)
pnpm build    # Build para produção
pnpm start    # Rodar versão de produção
pnpm check    # Verificar erros TypeScript
pnpm format   # Formatar código
```

## 🪟 Windows

O projeto é totalmente compatível com Windows. Os scripts npm usam `cross-env` para garantir compatibilidade multiplataforma.

## 🐳 Deploy com Docker

### Deploy Simples

```bash
docker-compose up -d
```

### Deploy com Traefik (Recomendado para Produção)

Para deploy em produção com SSL automático e domínio `start.iecg.com.br`:

```bash
# Preparar certificados
mkdir -p traefik
touch traefik/acme.json
chmod 600 traefik/acme.json

# Iniciar com Traefik
docker-compose -f docker-compose.traefik.yml up -d
```

Consulte [DEPLOY-TRAEFIK.md](./DEPLOY-TRAEFIK.md) para instruções completas.

## 📁 Estrutura do Projeto

```
start-iecg-form/
├── client/              # Frontend React + Vite
│   ├── src/
│   │   ├── pages/       # Páginas (StartForm.tsx)
│   │   ├── components/  # Componentes reutilizáveis
│   │   └── lib/         # Utilitários
│   └── index.html
├── server/              # Backend Node.js + tRPC
│   ├── routers.ts       # Rotas da API
│   └── _core/           # Core do servidor
├── shared/              # Código compartilhado
├── Dockerfile           # Build Docker
├── docker-compose.yml   # Docker simples
└── docker-compose.traefik.yml  # Docker + Traefik
```

## 🎨 Tecnologias

### Frontend
- React 19
- Vite 7
- TailwindCSS 4
- shadcn/ui
- React Hook Form + Zod
- Framer Motion

### Backend
- Node.js 22
- Express
- tRPC
- TypeScript

### Deploy
- Docker
- Traefik (proxy reverso)
- Let's Encrypt (SSL automático)

## 🔌 Integração API

O formulário envia dados para a API externa do portal IECG:

```
POST https://portal.iecg.com.br/public/direcionamentos
```

O backend atua como proxy para resolver problemas de CORS.

## 🌐 Deploy em Produção

### Opção 1: VPS com Traefik (Recomendado)

1. Configure DNS: `start.iecg.com.br` → IP da VPS
2. Siga o guia [DEPLOY-TRAEFIK.md](./DEPLOY-TRAEFIK.md)
3. SSL será configurado automaticamente

### Opção 2: VPS com Nginx

1. Siga o guia [DEPLOY.md](./DEPLOY.md)
2. Configure Nginx manualmente
3. Use Certbot para SSL

## 📝 Variáveis de Ambiente

Não são necessárias variáveis de ambiente adicionais. A aplicação funciona out-of-the-box.

## 🔒 Segurança

- ✅ HTTPS obrigatório em produção
- ✅ Validação de dados no frontend e backend
- ✅ Proxy para API externa (evita exposição de credenciais)
- ✅ Headers de segurança configurados
- ✅ Rate limiting disponível via Traefik

## 📊 Campos do Formulário

- **Campus IECG** (obrigatório)
- **Nome completo** (obrigatório)
- **Idade** (obrigatório)
- **WhatsApp** (obrigatório, com máscara automática)
- **Bairro** (obrigatório)
- **Decisão** (obrigatório):
  - Aceitar Jesus como Senhor e Salvador
  - Voltar para Jesus (reconciliação)
  - Encaminhamento de Célula
- **Observação** (opcional)

## 🎯 Funcionalidades

- ✅ Design responsivo mobile-first
- ✅ Validação em tempo real
- ✅ Máscara automática de WhatsApp
- ✅ Feedback visual de sucesso/erro
- ✅ Integração com API externa
- ✅ Animações suaves
- ✅ Tema institucional IECG

## 🐛 Troubleshooting

### Erro no Windows: "NODE_ENV não é reconhecido"

Certifique-se de ter instalado as dependências:
```bash
pnpm install
```

O pacote `cross-env` resolve esse problema automaticamente.

### Porta 3000 já em uso

```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Linux/Mac
lsof -ti:3000 | xargs kill
```

### Erro de CORS ao enviar formulário

O backend já está configurado como proxy. Certifique-se de que o servidor está rodando:
```bash
pnpm dev
```

## 📄 Licença

MIT

## 🤝 Suporte

Para problemas ou dúvidas, entre em contato com a equipe de TI da IECG.

---

**IECG - Igreja Evangélica Comunidade da Graça**  
Orientando um novo começo ✨
