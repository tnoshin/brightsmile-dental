function toggleMenu() {
    const restMenu = document.querySelector('.rest');
    restMenu.classList.toggle('active');
}
 
// Close menu when a link is clicked
document.querySelectorAll('.rest a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.rest').classList.remove('active');
    });
});
 
// Close menu when clicking outside
document.addEventListener('click', (e) => {
    const nav = document.querySelector('nav');
    const hamburger = document.querySelector('.hamburger');
    const restMenu = document.querySelector('.rest');
    
    if (!nav.contains(e.target)) {
        restMenu.classList.remove('active');
    }
});