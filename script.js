document.addEventListener('DOMContentLoaded', () => {
    const spanElements = document.querySelectorAll('span');
    const width = window.innerWidth;
    const height = window.innerHeight;

    spanElements.forEach((span) => {
        const number = Math.random() * width;
        const dimension = Math.floor(Math.random() * (15 - 10 + 1) + 10);
        const alpha = Math.random() * (0.4 - 0.2 + 0.1) + 0.3;

        span.style.width = dimension + 'px';
        span.style.height = dimension + 'px';
        span.style.background = `rgba(255, 255, 255, ${alpha})`;
        span.style.borderRadius = '50%';
        span.style.position = 'absolute';
        span.style.left = number + 'px';
        span.style.top = '-50px'; 
        span.style.zIndex = '999';
        span.style.animation = 'snowfall 8s linear infinite'; 
        span.style.animationDelay = `${Math.random() * 5}s`; 
    });
});
