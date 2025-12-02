# Project TODO

## Funcionalidades Principais

- [x] Configurar fontes Google (Montserrat + Lato)
- [x] Customizar tema de cores (Azul IECG + Verde + Cinza)
- [x] Criar componente de formulário START IECG
- [x] Implementar campos obrigatórios (Campus, Nome, Idade, WhatsApp, Bairro, Decisão)
- [x] Implementar campo opcional (Observação)
- [x] Adicionar máscara de formatação para WhatsApp
- [x] Implementar validação de formulário com React Hook Form + Zod
- [x] Integrar com API externa (https://portal.iecg.com.br/public/direcionamentos)
- [x] Adicionar feedback de sucesso/erro após envio
- [x] Implementar design mobile-first responsivo
- [x] Adicionar animações suaves (fade-in, transições)
- [x] Testar formulário no navegador
- [x] Resolver problema de CORS implementando proxy tRPC
- [x] Validar feedback de sucesso após envio
- [x] Criar checkpoint final

## Deploy Docker

- [x] Criar Dockerfile para build da aplicação
- [x] Criar docker-compose.yml para orquestração
- [x] Criar .dockerignore para otimizar build
- [x] Documentar processo de deploy em VPS

## Compatibilidade Windows

- [x] Corrigir scripts npm para funcionar no Windows
- [x] Adicionar cross-env para variáveis de ambiente
- [x] Testar instalação no Windows

## Deploy com Traefik

- [x] Atualizar docker-compose.yml com labels Traefik
- [x] Criar configuração Traefik com SSL automático
- [x] Documentar setup para start.iecg.com.br

## Atualização de Campos do Formulário

- [x] Manter campo "Campus IECG"
- [x] Adicionar campo "Rede" (select com opções predefinidas)
- [x] Adicionar campo "Cidade" (text input, padrão: Campo Grande)
- [x] Adicionar campo "Estado" (text input, padrão: Mato Grosso do Sul)
- [x] Adicionar checkbox "Desejo ser direcionado(a) para uma célula"
- [x] Adicionar campo "Bairros próximos" (múltiplos chips)
- [x] Remover campo "Observação"
- [x] Condicionar campos de localização ao checkbox de direcionamento
- [x] Atualizar validação do formulário
- [x] Atualizar integração com API
- [x] Testar formulário atualizado no navegador
- [x] Validar envio com todos os novos campos
- [x] Confirmar funcionamento de chips de bairros próximos

## Melhorias de UX

- [x] Adicionar background cinza claro na página
- [x] Criar box com sombra para o formulário
- [x] Implementar scroll automático para o topo após envio bem-sucedido
- [x] Testar melhorias no navegador

## Melhorias de Estilo dos Campos

- [x] Aumentar espessura das bordas dos campos (inputs, selects, textarea)
- [x] Fazer selects ocuparem 100% da largura disponível
- [x] Testar melhorias visuais no navegador

## Ajustes de Payload da API

- [x] Adicionar campo `campus_iecg` no payload (valor do campo campus)
- [x] Adicionar campo `status: "APELO_CADASTRADO"` no payload
- [x] Testar envio com novos campos
