document.querySelectorAll('.service').forEach(service => {
    service.addEventListener('mouseenter', () => {
        service.classList.add('hovered');
    });
    
    service.addEventListener('mouseleave', () => {
        service.classList.remove('hovered');
    });
});
