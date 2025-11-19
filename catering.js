
        const request = document.getElementById('form-details');
        const submit = document.getElementById('submit');

        request.addEventListener('submit', function(event) {
        event.preventDefault();

       // Change button text while sending
       submit.textContent = 'Submiting...';
       submit.disabled = true; // Disable button to prevent multiple submissions

        const serviceID = 'default_service';
        const templateID = 'template_85vppxx';

        const templateParams = {
            name: this.querySelector('input[name="name"]').value,
            email: this.querySelector('input[placeholder="E-mail"]').value,
            service: this.querySelector('#ServiceSelector').value,
            message: this.querySelector('textarea').value};

         // 'this' refers to the form element in the addEventListener callback
         emailjs.send(serviceID, templateID,templateParams, this)
        .then(() => {
            submit.textContent = 'Submitted!'; // Success state
            // Optionally, clear the form after success: form.reset();
            const name = document.querySelector('input[placeholder="Name"]').value;
            alert(`Thank You ${name} For Sending Your Request. We will contact you soon.`);
            form.reset();
            // Re-enable after a short delay or let it stay in the success state
            setTimeout(() => {
                submit.textContent = 'Sign Up';
                submit.disabled = false;
            }, 3000);
        }, (err) => {
            submit.textContent = 'Try Again'; // Failure state
            submit.disabled = false; // Re-enable on error
            console.error('EmailJS Error:', err); // Log error to console
            alert(`Oops! Something went wrong: ${JSON.stringify(err)}`);
        });
        });



    