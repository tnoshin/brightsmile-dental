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
    } else {
        alert('Your appointment has been submitted successfully!');
    }
});
