# Protótipo de Plataforma de Imersão (Equipe HIDROTECH)

Este repositório contém o protótipo funcional de uma plataforma digital interativa, desenvolvido pela equipe HIDROTECH como solução para o Ideathon IFTO.

# 1. Visão Geral

A plataforma busca promover a educação e o turismo sustentável, integrando ciência, tecnologia e cultura. O projeto apresenta pontos turísticos regionais por meio de uma experiência imersiva (focada em VR Cardboard/mobile), destacando o contexto cultural e socioeconômico de cada região.

O módulo inicial implementado como prova de conceito é a "Expedição Tocantins".

# 2. Status do Projeto

# Protótipo Funcional (Desenvolvido para o Ideathon).

# 3. Tecnologias Utilizadas

HTML5: Estruturação semântica do conteúdo.

CSS3: Estilizações personalizadas, animações e responsividade.

Bootstrap 5: Framework principal para layout, componentes (Navbar, Cards, Carousel, Modals) e responsividade.

JavaScript (ES6+): Utilizado para a animação de splash screen e scripts de componentes.

# 4. Estrutura de Arquivos

/ (Raiz do Projeto)
│
├── index.html              (Página inicial / Masthead)
│
├── Tocantis/
│   ├── EXPEDICAO-TOCANTINS.html (Página de detalhes da expedição)
│   ├── css/
│   │   ├── styles.css         (CSS do template de blog)
│   │   └── custom.css         (Estilos temáticos da expedição)
│   └── js/
│       └── video-controls.js  (Script de controle dos modais)
│
├── css/
│   ├── styles.css            (CSS principal do template)
│   └── custom.css            (Estilos globais: paleta, fontes, animações)
│
├── js/
│   └── scripts.js            (Script do splash screen principal)
│
└── assets/
    ├── imgs/
    │   ├── LOGOEXPLORA.png
    │   ├── IFTO.png
    │   └── ... (imagens)
    │
    └── favicon2.ico


# 5. Funcionalidades Implementadas

Animação de Splash Screen: Animação de fade in do logo executada na abertura do site.

Identidade Visual Personalizada:

Definição de uma paleta de cores global (Verde, Mint Cream, Eggplant).

Implementação da fonte "Poppins" (via Google Fonts) para consistência tipográfica.

Aplicação de logo (LOGOEXPLORA.png) na navbar e no cabeçalho.

Cabeçalho (Masthead) Interativo:

Uso de um Carrossel Bootstrap como fundo de tela cheia (100vh).

Aplicação de um overlay (camada escura) para garantir a legibilidade do texto.

Imagens com object-fit: cover para evitar distorção de proporção.

Estrutura Modular (Página de Expedição):

A página principal (index.html) linka para a página de expedição.

A página EXPEDICAO-TOCANTINS.html utiliza um layout de blog (com barra lateral) para exibir as rotas e parceiros.

Utilização de Modais Bootstrap para exibir os vídeos de imersão (via <iframe> do YouTube) e o contexto de cada rota.

Estilização Específica:

A página da expedição carrega um custom.css secundário (local) para aplicar estilos temáticos (cores da bandeira do Tocantins) sem afetar o site principal.

Micro-interações (CSS):

Efeito de "zoom" (transform: scale(1.1)) ao passar o mouse sobre os ícones de features e logos de parceiros.

Efeito de "flutuação" (transform: translateY(-5px)) ao passar o mouse sobre os cards.

# 6. Como Executar Localmente

Clone este repositório ou baixe o arquivo ZIP.

Descompacte a pasta (se necessário).

Abra o arquivo index.html em qualquer navegador web moderno.

Nota: Se as fontes ou estilos não carregarem corretamente, limpe o cache do navegador (Ctrl + Shift + R ou Cmd + Shift + R).
