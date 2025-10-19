document.querySelectorAll('.categoria-texto').forEach(categoria => {
    categoria.addEventListener("click", () => {
        const wasActive = categoria.classList.contains('categoria-texto-active');

        document.querySelectorAll('.categoria-texto').forEach(cat => {
            cat.classList.remove('categoria-texto-active');
        });

        if (!wasActive) {
            categoria.classList.add('categoria-texto-active');
        }
    });
});