# Explora Brasil

## 1. Visão Geral

O "Explora Brasil" é um protótipo de plataforma digital interativa que busca promover a educação e a conscientização sobre o patrimônio brasileiro. O projeto integra ciência, tecnologia, cultura e sustentabilidade, apresentando pontos turísticos por meio de uma experiência imersiva (focada em VR Cardboard/mobile) e destacando o contexto cultural, histórico e socioeconômico de cada região.

Este protótipo foi desenvolvido como solução para o Ideathon do IFTO. O primeiro módulo implementado é a **"Expedição Tocantins"**.

## 2. Status do Projeto

**Em Desenvolvimento** (Protótipo Funcional para o Ideathon).

## 3. Tecnologias Utilizadas

* **HTML5:** Estruturação semântica do conteúdo.
* **CSS3:** Estilização personalizada, animações e responsividade.
* **Bootstrap 5:** Framework principal para layout, componentes (Navbar, Cards, Carousel, Modals) e responsividade (mobile-first).
* **JavaScript (ES6+):** Utilizado para a animação do splash screen e para os scripts de componentes do Bootstrap.

## 4. Estrutura de Arquivos

O projeto está organizado da seguinte forma:
/ (Raiz do Projeto)
│
├── index.html              (Página inicial)
│
├── Tocantis/
│   ├── EXPEDICAO-TOCANTINS.html (Página de detalhes da expedição)
│   ├── css/
│   │   ├── styles.css         (CSS do template de blog)
│   │   └── custom.css         (Estilos da bandeira do Tocantins)
│
├── css/
│   ├── styles.css            (CSS principal do template)
│   └── custom.css            (Estilos globais: paleta de cores, fontes, animações)
│
├── js/
│   └── scripts.js            (Script do splash screen e interações)
│
└── assets/
    ├── imgs/
    │   ├── LOGOEXPLORA.png
    │   ├── IFTO.png
    │   └── ... (imagens do carrossel, etc.)
    │
    └── icon.ico

## 5. Funcionalidades Implementadas

* **Animação de Splash Screen:** Uma animação de "fade in" com o logo é executada na primeira vez que o usuário abre o site.
* **Identidade Visual Personalizada:**
    * Definição de uma paleta de cores global (Verde, Mint Cream, Eggplant).
    * Implementação da fonte "Poppins" (via Google Fonts) para tipografia.
    * Criação de um logo (`LOGOEXPLORA.png`) aplicado na navbar e no cabeçalho.
* **Cabeçalho (`Masthead`) Interativo:**
    * Uso de um Carrossel Bootstrap como fundo de tela cheia (`100vh`).
    * Aplicação de um `overlay` (camada escura) para garantir a legibilidade do texto.
    * Alinhamento do logo e título lado a lado usando Flexbox (`d-flex`).
    * Imagens com `object-fit: cover` para evitar distorção de proporção.
* **Estrutura Modular (Página de Expedição):**
    * A página principal (`index.html`) linka para a página de expedição.
    * A página `EXPEDICAO-TOCANTINS.html` utiliza um layout de blog (com barra lateral) para exibir as rotas e parceiros.
* **Estilização Específica:**
    * A página da expedição carrega um segundo `custom.css` (local) para aplicar estilos temáticos (cores da bandeira do Tocantins) sem afetar o site principal.
* **Micro-interações (CSS):**
    * Efeito de "zoom" (`transform: scale(1.1)`) ao passar o mouse sobre os ícones de features e logos de parceiros.
    * Efeito de "flutuação" (`transform: translateY(-5px)`) e sombra (`box-shadow`) ao passar o mouse sobre os cards.

## 6. Como Executar Localmente

1.  Clone este repositório ou baixe o arquivo ZIP.
2.  Descompacte a pasta (se necessário).
3.  Abra o arquivo `index.html` em qualquer navegador web moderno.
4.  **Nota:** Se as fontes ou estilos não carregarem corretamente, limpe o cache do navegador (`Ctrl + Shift + R` ou `Cmd + Shift + R`).
