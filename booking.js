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
const form = document.querySelector('form');
const successMsg = document.getElementById('successMsg');
 
// Listen for when the form is submitted
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop the form from submitting
 
    // Get the required fields
    const firstName = document.querySelector('#Name').value.trim();
    const lastName = document.querySelector('#surname').value.trim();
    const age = document.querySelector('#age').value.trim();
    const date = document.querySelector('#date').value.trim();
    const time = document.querySelector('#time').value.trim();
    const phone = document.querySelector('#number').value.trim();
 
    // Check if all required fields are filled
    if (firstName === '') {
        alert('Please fill in your first name.');
        return;
    }
    if (lastName === '') {
        alert('Please fill in your last name.');
        return;
    }
    if (age === '') {
        alert('Please provide your age.');
        return;
    }
    if (date === '') {
        alert('Please select a date.');
        return;
    }
    if (time === '') {
        alert('Please select a time.');
        return;
    }
    if (phone === '') {
        alert('Please fill in your phone number.');
        return;
    }
 
    // If all fields are valid, collect form data
    const formData = new FormData(form);
 
    // Send to Web3Forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
    })
    .then(function(response) {
        // Show success message
        successMsg.style.display = 'block';
        
        // Scroll to top so user sees the message
        window.scrollTo(0, 0);
        
        // Clear the form
        form.reset();
        
        // Hide message after 3 seconds
        setTimeout(function() {
            successMsg.style.display = 'none';
        }, 3000);
    })
    .catch(function(error) {
        alert('Something went wrong. Please try again.');
    });
});
