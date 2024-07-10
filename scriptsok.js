// Function to capture user click movements and show skill details
function showSkillDetail(skill) {
    var skillDetail = {
        html: 'HTML is the standard markup language for creating web pages.',
        css: 'CSS is used to style and layout web pages.',
        javascript: 'JavaScript is a programming language that enables interactive web pages.'
    };
    document.getElementById('skill-detail').innerText = skillDetail[skill];
}

// Function to add animation effect
document.querySelector('button').addEventListener('click', function() {
    this.classList.add('pulse');
    setTimeout(() => this.classList.remove('pulse'), 1000);
});

// Function to integrate videos from external websites
function loadVideo(videoId) {
    var videoPlayer = document.getElementById('video-player');
    videoPlayer.innerHTML = <iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allowfullscreen></iframe>;
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.video-thumbnail').forEach(function(thumbnail) {
        thumbnail.addEventListener('click', function() {
            loadVideo(this.dataset.videoId);
        });
    });
});

// Form validation
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