# Deploy no Hostinger

Este guia detalha os passos para compilar e fazer deploy da aplicação Zap Notas no Hostinger.

## Pré-requisitos

- Conta Hostinger VPS ou Cloud (com suporte a Node.js)
- SSH configurado no seu servidor Hostinger
- Node.js 18+ instalado no servidor
- Git instalado no servidor
- Domínio apontado para o IP do servidor

## Opção 1: Hostinger VPS (Recomendado)

### Passo 1: Conectar ao Servidor via SSH

```bash
ssh root@seu_ip_servidor
# ou
ssh usuario@seu_ip_servidor
```

### Passo 2: Criar Diretório para a Aplicação

```bash
mkdir -p /home/seu_usuario/zap-notas
cd /home/seu_usuario/zap-notas
```

### Passo 3: Clonar o Repositório

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git .
```

### Passo 4: Instalar Dependências

```bash
curl -fsSL https://get.pnpm.io/install.sh | sh -
source ~/.bashrc

pnpm install
```

Ou se preferir npm:

```bash
npm install
```

### Passo 5: Compilar a Aplicação

```bash
pnpm build
```

A pasta `.next` será gerada com todo o código compilado.

### Passo 6: Instalar PM2 Globalmente

```bash
pnpm add -g pm2
# ou
npm install -g pm2
```

### Passo 7: Iniciar a Aplicação com PM2

```bash
pm2 start "pnpm start" --name "zap-notas"
```

Verifique se está rodando:

```bash
pm2 status
```

### Passo 8: Configurar PM2 para Iniciar na Boot

```bash
pm2 startup
pm2 save
```

Copie e execute o comando sugerido pelo PM2 para manter a aplicação rodando após reinicializar o servidor.

### Passo 9: Instalar e Configurar Nginx

```bash
apt update
apt install nginx
```

Criar arquivo de configuração do Nginx:

```bash
nano /etc/nginx/sites-available/zap-notas
```

Cole o seguinte conteúdo, substituindo `seu-dominio.com` pelo seu domínio:

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
        proxy_cache_bypass $http_upgrade;
    }
}
```

Ativar o site:

```bash
ln -s /etc/nginx/sites-available/zap-notas /etc/nginx/sites-enabled/
```

Testar configuração do Nginx:

```bash
nginx -t
```

Reiniciar Nginx:

```bash
systemctl restart nginx
```

### Passo 10: Configurar SSL com Let's Encrypt (Grátis)

```bash
apt install certbot python3-certbot-nginx
certbot --nginx -d seu-dominio.com -d www.seu-dominio.com
```

Siga as instruções e o SSL será configurado automaticamente.

### Passo 11: Acessar a Aplicação

Visite `https://seu-dominio.com` no navegador. A aplicação deve estar ao vivo.

## Opção 2: Hostinger Compartilhado (Sem Node.js)

Se você tem apenas um plano compartilhado do Hostinger (sem Node.js disponível), você precisará compilar como site estático:

### Passo 1: Compilar Localmente

No seu computador:

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
pnpm install
pnpm build
```

A pasta `.next/standalone` contém o código pronto para servidor estático.

### Passo 2: Upload para Hostinger

Via FTP ou File Manager do Hostinger:

1. Acesse o File Manager no painel Hostinger
2. Navegue até a pasta `public_html`
3. Faça upload dos arquivos estáticos

Nota: Para aplicações Node.js completas, você precisará de um plano VPS do Hostinger.

## Atualizações Posteriores

Para atualizar a aplicação com novas mudanças do repositório:

```bash
cd /home/seu_usuario/zap-notas
git pull
pnpm install
pnpm build
pm2 restart zap-notas
```

## Monitorar a Aplicação

Ver logs da aplicação:

```bash
pm2 logs zap-notas
```

Ver status e estatísticas:

```bash
pm2 monit
```

Parar a aplicação:

```bash
pm2 stop zap-notas
```

Reiniciar a aplicação:

```bash
pm2 restart zap-notas
```

## Troubleshooting

### A aplicação não inicia

Verifique os logs:

```bash
pm2 logs zap-notas
```

Verifique se a porta 3000 não está sendo usada:

```bash
lsof -i :3000
```

### Nginx retorna erro 502

Verifique se a aplicação Node.js está rodando:

```bash
pm2 status
```

Verifique o arquivo de configuração do Nginx:

```bash
nginx -t
```

### SSL não funciona

Renove o certificado manualmente:

```bash
certbot renew
```
