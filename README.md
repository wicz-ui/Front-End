# Barbearia — Site Moderno e Responsivo

Site profissional de barbearia com design moderno, animações suaves e layout responsivo.

## 📋 Conteúdo

O site possui **3 seções principais**:

### 1️⃣ Seção Home (Fundo Preto)
- Bem-vindo e apresentação
- Destaques de benefícios (profissionais, qualidade, conforto)
- Botão de chamada para ação

### 2️⃣ Seção Serviços (Fundo Branco)
- Catálogo de serviços com imagens
- Preços **a partir de** R$ 35,00
- Depoimentos de clientes com ⭐ 5 estrelas
- Grid responsivo

### 3️⃣ Seção Contato (Fundo Preto)
- Endereço, telefones e emails
- Horários de funcionamento
- Galeria de trabalhos
- Botão para ligar direto

## 🎨 Características

✅ **Animações fluidas**
- Fade-in com delay ao carregar
- Scroll trigger com Intersection Observer
- Hover effects nos botões e galeria

✅ **Responsivo**
- Mobile-first design
- Adapta-se a todos os tamanhos de tela

✅ **Navegação inteligente**
- Header com cor dinâmica (inverte conforme a seção)
- Links de navegação com destaque automático
- Scroll suave

✅ **Cores profissionais**
- Preto (#0b0b0b) — seriedade
- Branco (#ffffff) — claridade
- Ouro (#c59a58) — sofisticação

## 🚀 Como Usar

### Opção 1: Abrir localmente
1. Abra `index2.html` no navegador
2. Certifique-se de que a pasta `fotos/` existe com as imagens listadas

### Opção 2: Servir localmente (Python)
```bash
# Python 3
python -m http.server 8000

# Acesse: http://localhost:8000/index2.html
```

## 📁 Estrutura

```
/workspaces/Front-End/
├── index.html         (versão inicial)
├── index2.html        (versão final com tudo expandido)
├── index.js           (lógica e animações)
├── README.md          (este arquivo)
└── fotos/             (pasta com imagens)
    ├── allef-vinicius-IvQeAVeJULw-unsplash.jpg
    ├── images.jpeg
    └── nate-johnston-tgPrIYnW3g4-unsplash.jpg
```

## 🎬 Animações Incluídas

| Tipo | Descrição |
|------|-----------|
| `fadeInUp` | Fade com deslocamento para cima |
| `slideInLeft` | Desliza da esquerda |
| `slideInRight` | Desliza da direita |
| `scaleIn` | Cresce suavemente |
| `.animate-fade` | Disparada ao scroll |

## 📝 Customização

### Mudar cores
Edite as variáveis CSS em `index2.html`:
```css
:root {
  --black: #0b0b0b;     /* Fundo escuro */
  --white: #ffffff;     /* Fundo claro */
  --accent: #c59a58     /* Destaque (ouro) */
}
```

### Adicionar mais serviços
Copie um elemento `.card` dentro da seção `#servicos` e altere:
```html
<div class="card">
  <img src="fotos/sua-imagem.jpg" alt="Descrição">
  <h3>Nome do Serviço</h3>
  <p>Descrição...</p>
  <small>A partir de R$ XX,00</small>
</div>
```

### Mudar telefone/email
Localize os elementos em `#contato` e atualize.

## 📱 Compatibilidade

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Mobile (iOS, Android)
- ✅ Tablets
- ✅ Desktop

## 🔧 Tecnologias

- HTML5
- CSS3 (Flexbox, Grid, Animations)
- JavaScript Vanilla (Scroll, Observer API)
- Google Fonts (Montserrat)

---

**Desenvolvido com ❤️ para sua barbearia.**
