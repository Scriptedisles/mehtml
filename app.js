const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        } 
        
        
    });
});


const hiddenElements = document.querySelectorAll('.hidden')
hiddenElements.forEach((el) => observer.observe(el));

$("#1").click(function() {
    window.open(
    'http://www.w3schools.com',
    '_blank' // <- This makes it open in a new window.
    );
});