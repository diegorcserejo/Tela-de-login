document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');

    audio.volume = 0.2;

    function playMusic() {
        audio.play().catch(error => {
            console.error('Não foi possível reproduzir a música:', error);
        });
    }

    setTimeout(playMusic, 500);

    const spanElements = document.querySelectorAll('span');
    const width = window.innerWidth;

    spanElements.forEach((span) => {
        const number = Math.random() * width;
        const dimension = Math.floor(Math.random() * (15 - 10 + 1) + 10);
        const alpha = Math.random() * (0.4 - 0.2 + 0.1) + 0.3;

        span.style.width = `${dimension}px`;
        span.style.height = `${dimension}px`;
        span.style.background = `rgba(255, 255, 255, ${alpha})`;
        span.style.borderRadius = '50%';
        span.style.position = 'absolute';
        span.style.left = `${number}px`;
        span.style.top = '-50px'; 
        span.style.zIndex = '999';
        span.style.animation = 'snowfall 8s linear infinite'; 
        span.style.animationDelay = `${Math.random() * 5}s`; 
    });

    document.querySelector('#loginForm').addEventListener('submit', (e) => {
        e.preventDefault();

        let username = document.getElementById('username').value.trim();
        let password = document.getElementById('password').value.trim();
        let msg = document.getElementById('message');

        if (username === 'admin' && password === 'admin123') {
            msg.innerHTML = '<strong>Login efetuado com sucesso!</strong>';
            msg.style.color = '#1ED760';
            msg.style.border = '2px solid #1ED760';      
        } else { 
            msg.innerHTML = '<strong>Usuário ou senha inválidos.</strong>';
            msg.style.color = '#d9534f';
            msg.style.border = '2px solid #d9534f';
        }
    });
});