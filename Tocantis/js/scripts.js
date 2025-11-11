document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Detectar se é um dispositivo móvel (celular ou tablet)
    const isMobile = /Mobi|Android|iPhone|iPad|iPod/i.test(navigator.userAgent);

    // 2. Se for um dispositivo móvel...
    if (isMobile) {
        
        // 3. Encontrar todos os botões que têm a nossa classe customizada
        const videoButtons = document.querySelectorAll('.btn-video-imersao');

        videoButtons.forEach(button => {
            
            // 4. Remover os atributos do Bootstrap que abrem o modal
            // Isso previne que o modal tente abrir no celular
            button.removeAttribute('data-bs-toggle');
            button.removeAttribute('data-bs-target');

            // 5. Adicionar um novo evento de clique nesses botões
            button.addEventListener('click', function(event) {
                event.preventDefault(); // Prevenir qualquer comportamento padrão

                // 6. Obter o ID do vídeo que guardamos no atributo 'data-video-id'
                const videoId = this.getAttribute('data-video-id');

                if (videoId) {
                    // 7. Criar o link para o app do YouTube (com tentativa de loop)
                    // O próprio celular (Android/iOS) vai interceptar esse link e abrir no App.
                    const youtubeAppUrl = `https://www.youtube.com/watch?v=${videoId}&loop=1&playlist=${videoId}`;
                    
                    // 8. Redirecionar o navegador para esse link
                    window.location.href = youtubeAppUrl;
                }
            });
        });
    }
    // Se NÃO for mobile, o script não faz nada, 
    // e os atributos 'data-bs-toggle' originais vão funcionar, abrindo o modal normalmente.
});

// Se você já tiver outro código no seu scripts.js,
// pode adicionar este novo bloco de código no final do arquivo.
// O 'DOMContentLoaded' garante que ele só rode depois que a página carregar.
