# Zap Notas - Quero Faturar

Landing page e plataforma de emissão de notas fiscais via WhatsApp.

## 🚀 Quickstart Local

### Pré-requisitos
- Node.js 18+ ([download](https://nodejs.org))
- pnpm, npm, yarn ou bun

### Instalação e Desenvolvimento

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio

# Instale dependências
pnpm install
# ou npm install / yarn install / bun install

# Inicie o servidor de desenvolvimento
pnpm dev
# Acesse http://localhost:3000
```

---

## 📦 Compilação para Produção

### Opção 1: Bluehost Compartilhado (Recomendado)
Se você tem um plano **compartilhado** no Bluehost, compile como **site estático**:

```bash
# Compile o projeto
pnpm build
pnpm export

# Isso gera a pasta 'out/' com arquivos HTML/CSS/JS prontos
```

**Para fazer upload no Bluehost:**

1. Acesse **cPanel** → **File Manager**
2. Navegue até `public_html/`
3. Delete o conteúdo atual (se houver)
4. Upload dos arquivos da pasta `out/` via FTP ou File Manager
5. Pronto! Seu site está no ar

### Opção 2: Bluehost VPS (Com Node.js)
Se você tem um **VPS** no Bluehost:

```bash
# No seu servidor VPS via SSH:
cd /home/seu-usuario/seu-dominio
git clone https://github.com/seu-usuario/seu-repositorio.git .

# Instale dependências
pnpm install

# Compile o projeto
pnpm build

# Inicie em produção
pnpm start
# Ou use PM2 para manter rodando 24/7:
pnpm add -g pm2
pm2 start "pnpm start" --name "zap-notas"
pm2 startup
pm2 save
```

Configure um **reverse proxy** (Nginx) para apontar seu domínio para a porta 3000.

---

## 📂 Estrutura do Projeto

```
.
├── app/                 # Next.js App Router
│   ├── layout.tsx      # Layout raiz
│   ├── page.tsx        # Página principal
│   └── globals.css     # Estilos globais
├── components/
│   └── livia/          # Componentes da landing page
│       ├── Header.tsx
│       ├── Hero.tsx
│       ├── VideoSection.tsx
│       ├── WhatsAppSection.tsx
│       ├── TechSection.tsx
│       ├── ComparisonSection.tsx
│       ├── FeaturesSection.tsx
│       ├── CtaFinal.tsx
│       └── Footer.tsx
├── public/
│   └── images/         # Imagens do projeto
├── next.config.js      # Configuração Next.js
├── package.json
└── README.md
```

---

## 🛠 Stack Tecnológico

- **Next.js 16** - React Framework
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Estilização
- **Motion** - Animações
- **Recharts** - Gráficos (se necessário)

---

## 🔧 Variáveis de Ambiente

Não há variáveis obrigatórias para esta landing page. Se precisar adicionar alguma:

```bash
# Crie um arquivo .env.local
NEXT_PUBLIC_EXAMPLE=valor
```

---

## 📤 Deploy

### Vercel (Recomendado)
Conecte o repositório GitHub:
1. Acesse [vercel.com](https://vercel.com)
2. Clique em "New Project"
3. Selecione o repositório
4. Deploy automático realizado

### Netlify
```bash
npm run build
netlify deploy --prod --dir=.next
```

### Bluehost (conforme instruções acima)

---

## 🎯 Scripts Disponíveis

```bash
pnpm dev       # Inicia servidor de desenvolvimento
pnpm build     # Compila para produção (.next/)
pnpm export    # Exporta como site estático (out/)
pnpm start     # Inicia servidor de produção
pnpm lint      # Verifica código (se configurado)
```

---

## 📝 Licença

Este projeto é propriedade da **CodeHash Sistemas** e **Quero Faturar**.

---

## 📞 Suporte

Para dúvidas ou problemas, entre em contato com [CodeHash Sistemas](https://www.codehash.dev.br/)
