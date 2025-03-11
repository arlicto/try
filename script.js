document.querySelectorAll('.yes-btn').forEach(button => {
    button.addEventListener('click', function() {
        document.body.classList.add('fade-out');
        setTimeout(() => {
            window.location.href = 'love.html';
        }, 1000);
    });
});
