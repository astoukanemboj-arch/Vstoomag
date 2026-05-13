window.onload = () => {
    const fills = document.querySelectorAll('.progress-fill');
    
    fills.forEach(bar => {
        // On récupère le chiffre dans "data-percent"
        const targetWidth = bar.getAttribute('data-percent');
        // On l'applique à la largeur (width) en pixels ou %
        bar.style.width = targetWidth + '%';
    });
};