const form = document.getElementById('newsletter-form');
const btn = document.getElementById('sign-up');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Change button text while sending
    btn.textContent = 'Signing Up...';
    btn.disabled = true; // Disable button to prevent multiple submissions

    const serviceID = 'default_service';
    const templateID = 'template_ce1k5jk';

    // 'this' refers to the form element in the addEventListener callback
    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.textContent = 'Signed Up!'; // Success state
            // Optionally, clear the form after success: form.reset();
            alert('Thank you for signing up!');
            form.reset();
            // Re-enable after a short delay or let it stay in the success state
            setTimeout(() => {
                btn.textContent = 'Sign Up';
                btn.disabled = false;
            }, 3000);
        }, (err) => {
            btn.textContent = 'Try Again'; // Failure state
            btn.disabled = false; // Re-enable on error
            console.error('EmailJS Error:', err); // Log error to console
            alert(`Oops! Something went wrong: ${JSON.stringify(err)}`);
        });
});