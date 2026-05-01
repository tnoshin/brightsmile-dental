function toggleMenu() {
    document.querySelector('.rest').classList.toggle('open'); 
}

document.getElementById('darkToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.getElementById('moonphn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});