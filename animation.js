const fadeobserver1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        
        if (entry.isIntersecting) {
            entry.target.classList.add('fadeupanim')
        }
    })
}, 
{ threshold: 0.5 })


const fadeElements1 = document.querySelectorAll('.fadeup');
fadeElements1.forEach((el) => fadeobserver1.observe(el)); 
// fade in animation