function toggleMenu() {
    document.querySelector('.rest').classList.toggle('open'); // changed 'active' to 'open'
}
document.querySelector(`form`).addEventListener(`submit`, function(event) {
    if (document.querySelector(`#Name`).value === ``) {
        event.preventDefault();
        alert(`Please fill in your name.`);
    } else if (document.querySelector(`#email`).value === ``) {
        event.preventDefault();
        alert(`Please fill in your email.`);
    } else if (document.querySelector(`#message`).value === ``) {
        event.preventDefault();
        alert(`Please write the message.`);
    }
})


document.getElementById('darkToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.getElementById('moonphn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});