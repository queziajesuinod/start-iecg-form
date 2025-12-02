# 🚀 Deploy com Traefik - start.iecg.com.br

Guia completo para fazer deploy do formulário START IECG usando **Traefik** como proxy reverso com SSL automático.

## 📋 Pré-requisitos

- VPS com Ubuntu 20.04+ (ou similar)
- Docker e Docker Compose instalados
- Domínio `start.iecg.com.br` apontando para o IP da VPS
- Portas 80 e 443 abertas no firewall

## 🌐 Configurar DNS

Antes de começar, configure o DNS do domínio:

```
Tipo: A
Nome: start
Valor: [IP_DA_SUA_VPS]
TTL: 3600
```

Aguarde a propagação DNS (pode levar até 24h, mas geralmente é rápido).

Teste com:
```bash
ping start.iecg.com.br
```

## 📦 Instalação do Docker

Se ainda não tiver Docker instalado:

```bash
# Atualizar sistema
sudo apt update && sudo apt upgrade -y

# Instalar Docker
curl -fsSL https://get.docker.com -o get-docker.sh
sudo sh get-docker.sh

# Adicionar usuário ao grupo docker
sudo usermod -aG docker $USER

# Instalar Docker Compose
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# Relogar para aplicar permissões
exit
```

## 🚀 Deploy da Aplicação

### 1. Enviar arquivos para VPS

```bash
# Na sua máquina local
scp -r start-iecg-form user@seu-servidor.com:/home/user/

# Ou use Git
ssh user@seu-servidor.com
git clone https://seu-repositorio.git
cd start-iecg-form
```

### 2. Preparar Traefik

```bash
# Criar diretório para certificados
mkdir -p traefik

# Criar arquivo para certificados SSL (importante!)
touch traefik/acme.json
chmod 600 traefik/acme.json
```

### 3. Configurar email para Let's Encrypt

Edite o arquivo `docker-compose.traefik.yml` e altere o email:

```yaml
- "--certificatesresolvers.letsencrypt.acme.email=contato@iecg.com.br"
```

Substitua por um email válido da IECG.

### 4. Iniciar aplicação

```bash
# Build e start
docker-compose -f docker-compose.traefik.yml up -d

# Verificar logs
docker-compose -f docker-compose.traefik.yml logs -f
```

### 5. Verificar funcionamento

Aguarde alguns segundos e acesse:

- **Aplicação**: https://start.iecg.com.br
- **Dashboard Traefik** (opcional): http://seu-servidor:8080

O certificado SSL será gerado automaticamente pelo Let's Encrypt!

## 🔒 Segurança em Produção

### Desabilitar Dashboard Traefik

Para produção, remova estas linhas do `docker-compose.traefik.yml`:

```yaml
# Remover estas linhas:
- "8080:8080" # Na seção ports
- "--api.dashboard=true"
- "--api.insecure=true"
```

E reinicie:
```bash
docker-compose -f docker-compose.traefik.yml down
docker-compose -f docker-compose.traefik.yml up -d
```

### Configurar Firewall

```bash
# Permitir apenas HTTP, HTTPS e SSH
sudo ufw allow 22/tcp   # SSH
sudo ufw allow 80/tcp   # HTTP
sudo ufw allow 443/tcp  # HTTPS
sudo ufw enable
```

## 🔄 Comandos Úteis

### Ver logs da aplicação
```bash
docker-compose -f docker-compose.traefik.yml logs -f app
```

### Ver logs do Traefik
```bash
docker-compose -f docker-compose.traefik.yml logs -f traefik
```

### Reiniciar aplicação
```bash
docker-compose -f docker-compose.traefik.yml restart app
```

### Parar tudo
```bash
docker-compose -f docker-compose.traefik.yml down
```

### Atualizar aplicação
```bash
# Parar containers
docker-compose -f docker-compose.traefik.yml down

# Atualizar código (git pull ou substituir arquivos)

# Rebuild e restart
docker-compose -f docker-compose.traefik.yml build
docker-compose -f docker-compose.traefik.yml up -d
```

## 🔍 Verificar Certificado SSL

```bash
# Ver detalhes do certificado
echo | openssl s_client -servername start.iecg.com.br -connect start.iecg.com.br:443 2>/dev/null | openssl x509 -noout -dates

# Verificar expiração
curl -vI https://start.iecg.com.br 2>&1 | grep -i expire
```

## 📊 Monitoramento

### Ver uso de recursos

```bash
# CPU e memória dos containers
docker stats

# Apenas da aplicação
docker stats start-iecg-form
```

### Logs em tempo real

```bash
# Todos os logs
docker-compose -f docker-compose.traefik.yml logs -f

# Últimas 100 linhas
docker-compose -f docker-compose.traefik.yml logs -f --tail=100
```

## 🔧 Troubleshooting

### Certificado SSL não é gerado

**Problema**: Acesso via HTTPS não funciona

**Soluções**:

1. Verificar DNS:
```bash
nslookup start.iecg.com.br
```

2. Verificar portas abertas:
```bash
sudo netstat -tulpn | grep -E ':(80|443)'
```

3. Ver logs do Traefik:
```bash
docker-compose -f docker-compose.traefik.yml logs traefik | grep -i acme
```

4. Verificar permissões do acme.json:
```bash
ls -la traefik/acme.json
# Deve mostrar: -rw------- (600)
```

5. Limpar e tentar novamente:
```bash
docker-compose -f docker-compose.traefik.yml down
rm traefik/acme.json
touch traefik/acme.json
chmod 600 traefik/acme.json
docker-compose -f docker-compose.traefik.yml up -d
```

### Aplicação não responde

```bash
# Verificar se container está rodando
docker ps

# Ver logs de erro
docker-compose -f docker-compose.traefik.yml logs app

# Reiniciar aplicação
docker-compose -f docker-compose.traefik.yml restart app
```

### Erro "too many certificates"

Let's Encrypt tem limite de 5 certificados por semana para o mesmo domínio.

**Solução**: Aguarde 1 semana ou use staging para testes:

```yaml
# Adicione esta linha no docker-compose.traefik.yml (apenas para testes):
- "--certificatesresolvers.letsencrypt.acme.caserver=https://acme-staging-v02.api.letsencrypt.org/directory"
```

## 🔄 Renovação Automática de Certificados

Traefik renova automaticamente os certificados 30 dias antes do vencimento. Não é necessário configurar nada!

Para verificar:
```bash
# Ver logs de renovação
docker-compose -f docker-compose.traefik.yml logs traefik | grep -i renew
```

## 🌐 Adicionar Mais Domínios

Para adicionar `www.start.iecg.com.br` ou outros subdomínios, edite as labels no `docker-compose.traefik.yml`:

```yaml
labels:
  # HTTP
  - "traefik.http.routers.start-iecg-http.rule=Host(`start.iecg.com.br`) || Host(`www.start.iecg.com.br`)"
  
  # HTTPS
  - "traefik.http.routers.start-iecg-https.rule=Host(`start.iecg.com.br`) || Host(`www.start.iecg.com.br`)"
```

## 📈 Otimizações Opcionais

### Adicionar compressão Gzip

```yaml
labels:
  # Adicione estas linhas:
  - "traefik.http.middlewares.gzip-compress.compress=true"
  - "traefik.http.routers.start-iecg-https.middlewares=gzip-compress"
```

### Adicionar rate limiting

```yaml
labels:
  # Limitar a 100 requisições por segundo
  - "traefik.http.middlewares.rate-limit.ratelimit.average=100"
  - "traefik.http.routers.start-iecg-https.middlewares=rate-limit"
```

### Adicionar headers de segurança

```yaml
labels:
  - "traefik.http.middlewares.security-headers.headers.stsSeconds=31536000"
  - "traefik.http.middlewares.security-headers.headers.stsIncludeSubdomains=true"
  - "traefik.http.middlewares.security-headers.headers.stsPreload=true"
  - "traefik.http.routers.start-iecg-https.middlewares=security-headers"
```

## 📦 Backup

```bash
# Backup completo
tar -czf backup-start-iecg-$(date +%Y%m%d).tar.gz \
  start-iecg-form/ \
  traefik/

# Backup automático diário (crontab)
crontab -e

# Adicione:
0 2 * * * tar -czf /backups/start-iecg-$(date +\%Y\%m\%d).tar.gz /home/user/start-iecg-form/ /home/user/traefik/
```

## ✅ Checklist de Produção

- [ ] DNS configurado e propagado
- [ ] Firewall configurado (portas 80, 443, 22)
- [ ] Email válido no Let's Encrypt
- [ ] Certificado SSL gerado e funcionando
- [ ] Dashboard Traefik desabilitado
- [ ] Backup configurado
- [ ] Monitoramento ativo
- [ ] Logs sendo verificados regularmente

## 🆘 Suporte

Em caso de problemas:

1. Verifique os logs: `docker-compose -f docker-compose.traefik.yml logs -f`
2. Teste a API externa: `curl https://portal.iecg.com.br/public/direcionamentos`
3. Verifique DNS: `nslookup start.iecg.com.br`
4. Verifique certificado: `openssl s_client -connect start.iecg.com.br:443`

## 🎉 Pronto!

Sua aplicação está rodando em:
- **URL**: https://start.iecg.com.br
- **SSL**: Automático via Let's Encrypt
- **Renovação**: Automática
- **Redirecionamento HTTP → HTTPS**: Automático

Tudo gerenciado pelo Traefik! 🚀
