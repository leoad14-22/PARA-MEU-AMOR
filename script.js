// Animação adicional: Estrelas cadentes icônicas
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    
    function createStar() {
        const star = document.createElement('i');
        star.className = 'fas fa-star text-warning';
        star.style.position = 'absolute';
        star.style.left = Math.random() * 100 + '%';
        star.style.top = '-10px';
        star.style.fontSize = Math.random() * 1.5 + 'rem';
        star.style.animation = 'fall 3s linear infinite';
        heroSection.appendChild(star);
        
        setTimeout(() => star.remove(), 3000);
    }
    
    setInterval(createStar, 2000); // Cria uma estrela a cada 2 segundos
    
    // Animação de corações flutuantes
    const hearts = document.querySelectorAll('.floating-heart');
    hearts.forEach(heart => {
        heart.addEventListener('animationiteration', function() {
            heart.style.left = Math.random() * 80 + '%';
        });
    });
});

// CSS para animação de queda (adicionar ao styles.css se necessário)
const style = document.createElement('style');
style.textContent = `
@keyframes fall {
    to { transform: translateY(100vh); opacity: 0; }
}`;
document.head.appendChild(style);
