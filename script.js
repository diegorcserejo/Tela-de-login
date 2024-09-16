document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('backgroundMusic');

    audio.volume = 0.1;

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
        
        const username = document.querySelector('#username').value.trim();
        const password = document.querySelector('#password').value.trim();
        const messageElement = document.querySelector('#message');

        if (username === '' || password === '') {
            messageElement.textContent = 'Por favor, preencha todos os campos.';
            messageElement.style.color = '#d9534f'; 
            return;
        }

        if (username === 'admin' && password === 'admin123') {
            messageElement.textContent = 'Login efetuado com sucesso!';
            messageElement.style.color = '#1ED760'; 
        } else {
            messageElement.textContent = 'Usuário ou senha inválidos.';
            messageElement.style.color = '#d9534f'; 
        }
    });
});
