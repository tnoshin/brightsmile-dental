function toggleMenu() {
    document.querySelector('.rest').classList.toggle('open'); // changed 'active' to 'open'
}
document.querySelector(`form`).addEventListener(`submit`, function (event) {
    if (document.querySelector(`#Name`).value === ``) {
        event.preventDefault();
        alert(`Please fill in your first name.`);
    } else if (document.querySelector('#surname').value === ''){
        event.preventDefault();
        alert('Please fill in your last name.')   
    } else if (document.querySelector('#time').value === ``){
        event.preventDefault();
        alert('PLease provide the time you would like to take an appointment for.');
    } else if (document.querySelector(`#number`).value === ``) {
        event.preventDefault();
        alert(`Please fill in your number.`);
    } else if (document.querySelector(`#age`).value === ``) {
        event.preventDefault();
        alert(`Please provide your age.`);
    }else if (document.querySelector(`#date`).value === ``) {
        event.preventDefault();
        alert(`Please select a date, we are available all days of the week except Sunday.`);
    }
})
const form = document.querySelector('forms');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting immediately

    // Collect form data
    const formData = new FormData(form);

    // Send to Web3Forms manually
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        if (response.ok) {
            successMsg.style.display = 'block'; // Show success message
            form.reset(); // Clear the form
        } else {
            alert('Something went wrong. Please try again.');
        }
    })
    .catch(function(error) {
        alert('Something went wrong. Please try again.');
    });
});
