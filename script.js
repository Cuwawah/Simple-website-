document.addEventListener('DOMContentLoaded', function() {
    // Learn More Button
    const learnMoreBtn = document.querySelector('.hero button');
    learnMoreBtn.addEventListener('click', function() {
        document.querySelector('#about').scrollIntoView({ 
            behavior: 'smooth' 
        });
    });
});