// newfile.js
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();

    let name = event.target.name.value;
    let mobile = event.target.mobile.value;
    let email = event.target.email.value;
    let organization = event.target.organization.value;
    let message = event.target.message.value;

    if (!name || !mobile || !email || !message) {
        alert('Please fill in all required fields.');
        return;
    }

    if (!/^\d{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
    }

    alert('Message sent successfully!');
    // You can add code here to send the form data to a server
    // Reset the form after submission
    event.target.reset();
});
