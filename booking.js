function toggleMenu() {
    document.querySelector('.rest').classList.toggle('open');
}

document.querySelector('form').addEventListener('submit', function(event) {
    if (document.querySelector('#Name').value === '') {
        event.preventDefault();
        alert('Please fill in your first name.');
    } else if (document.querySelector('#surname').value === '') {
        event.preventDefault();
        alert('Please fill in your last name.');
    } else if (document.querySelector('#time').value === '') {
        event.preventDefault();
        alert('Please provide the time for your appointment.');
    } else if (document.querySelector('#number').value === '') {
        event.preventDefault();
        alert('Please fill in your number.');
    } else if (document.querySelector('#age').value === '') {
        event.preventDefault();
        alert('Please provide your age.');
    } else if (document.querySelector('#date').value === '') {
        event.preventDefault();
        alert('Please select a date.');
    }
});

document.getElementById('darkToggle').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});

document.getElementById('moonphn').addEventListener('click', function() {
    document.body.classList.toggle('dark');
    this.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
});