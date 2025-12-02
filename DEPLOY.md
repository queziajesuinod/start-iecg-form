# 🚀 Guia de Deploy em VPS com Docker

Este guia explica como fazer deploy do formulário START IECG em uma VPS usando Docker.

## Pré-requisitos

- VPS com Ubuntu 20.04+ (ou similar)
- Docker instalado
- Docker Compose instalado
- Acesso SSH à VPS
- Domínio configurado (opcional, mas recomendado)

## Instalação do Docker (se necessário)

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

# Verificar instalação
docker --version
docker-compose --version
```

## Deploy da Aplicação

### 1. Enviar arquivos para VPS

```bash
# Na sua máquina local, comprima o projeto
tar -czf start-iecg-form.tar.gz start-iecg-form/

# Envie para VPS via SCP
scp start-iecg-form.tar.gz user@seu-servidor.com:/home/user/

# Conecte via SSH
ssh user@seu-servidor.com

# Extraia os arquivos
tar -xzf start-iecg-form.tar.gz
cd start-iecg-form
```

### 2. Build e iniciar container

```bash
# Build da imagem
docker-compose build

# Iniciar container
docker-compose up -d

# Verificar logs
docker-compose logs -f
```

### 3. Verificar aplicação

```bash
# Testar localmente na VPS
curl http://localhost:3000

# A aplicação estará rodando na porta 3000
```

## Configuração com Nginx (Recomendado)

Para usar um domínio e HTTPS, configure Nginx como proxy reverso:

### 1. Instalar Nginx

```bash
sudo apt install nginx -y
```

### 2. Criar configuração do site

```bash
sudo nano /etc/nginx/sites-available/start-iecg
```

Cole o seguinte conteúdo:

```nginx
server {
    listen 80;
    server_name seu-dominio.com www.seu-dominio.com;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

### 3. Ativar site e reiniciar Nginx

```bash
# Criar link simbólico
sudo ln -s /etc/nginx/sites-available/start-iecg /etc/nginx/sites-enabled/

# Testar configuração
sudo nginx -t

# Reiniciar Nginx
sudo systemctl restart nginx
```

### 4. Configurar HTTPS com Let's Encrypt

```bash
# Instalar Certbot
sudo apt install certbot python3-certbot-nginx -y

# Obter certificado SSL
sudo certbot --nginx -d seu-dominio.com -d www.seu-dominio.com

# Renovação automática já está configurada
```

## Comandos Úteis

```bash
# Ver logs da aplicação
docker-compose logs -f

# Parar aplicação
docker-compose down

# Reiniciar aplicação
docker-compose restart

# Atualizar aplicação (após mudanças)
docker-compose down
docker-compose build
docker-compose up -d

# Ver containers rodando
docker ps

# Entrar no container
docker exec -it start-iecg-form sh

# Limpar recursos não utilizados
docker system prune -a
```

## Configuração de Firewall

```bash
# Permitir HTTP e HTTPS
sudo ufw allow 80/tcp
sudo ufw allow 443/tcp

# Se não usar Nginx, permitir porta 3000
sudo ufw allow 3000/tcp

# Ativar firewall
sudo ufw enable
```

## Monitoramento

### Ver uso de recursos

```bash
# CPU e memória do container
docker stats start-iecg-form

# Logs em tempo real
docker-compose logs -f --tail=100
```

## Backup

```bash
# Backup do código
tar -czf backup-$(date +%Y%m%d).tar.gz start-iecg-form/

# Agendar backup automático (crontab)
crontab -e

# Adicione esta linha para backup diário às 2h da manhã
0 2 * * * tar -czf /backups/start-iecg-$(date +\%Y\%m\%d).tar.gz /home/user/start-iecg-form/
```

## Troubleshooting

### Aplicação não inicia

```bash
# Ver logs detalhados
docker-compose logs

# Verificar se porta 3000 está em uso
sudo lsof -i :3000

# Rebuild completo
docker-compose down
docker-compose build --no-cache
docker-compose up -d
```

### Erro de memória

```bash
# Aumentar limite de memória no docker-compose.yml
services:
  app:
    mem_limit: 512m
    mem_reservation: 256m
```

### Container reiniciando constantemente

```bash
# Ver logs de erro
docker logs start-iecg-form

# Verificar saúde do container
docker inspect start-iecg-form
```

## Atualização da Aplicação

```bash
# 1. Fazer backup
docker-compose down
tar -czf backup-before-update.tar.gz .

# 2. Atualizar código (git pull ou substituir arquivos)

# 3. Rebuild e restart
docker-compose build
docker-compose up -d

# 4. Verificar logs
docker-compose logs -f
```

## Segurança

- ✅ Use HTTPS (Let's Encrypt)
- ✅ Configure firewall (ufw)
- ✅ Mantenha Docker atualizado
- ✅ Use senhas fortes para SSH
- ✅ Considere usar fail2ban
- ✅ Monitore logs regularmente

## Suporte

Para problemas ou dúvidas:
- Verifique os logs: `docker-compose logs -f`
- Teste a API externa: `curl https://portal.iecg.com.br/public/direcionamentos`
- Reinicie o container: `docker-compose restart`
