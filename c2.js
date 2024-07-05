document.getElementById('contact-form').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var mobile = document.getElementById('mobile').value;
    var email = document.getElementById('email').value;

    if (name === '' || mobile === '' || email === '') {
        alert('Please fill in all required fields.');
        event.preventDefault();
    } else if (!/^[0-9]{10}$/.test(mobile)) {
        alert('Please enter a valid 10-digit mobile number.');
        event.preventDefault();
    }
});