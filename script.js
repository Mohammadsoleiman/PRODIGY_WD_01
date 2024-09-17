// Add 'scrolled' class to nav when scrolling


window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
  
    if (window.scrollY <50) {
        navbar.classList.remove('scrolled');}
    
       
     else {
        navbar.classList.add('scrolled');
    }
    console.log(window.scrollY);
});

window.addEventListener('scroll', () => {
    const navbar1 = document.getElementById('navbar');
  
    if (window.scrollY >150) {
        navbar1.classList.add('scrolledS');}
        
     
       
     else {
        navbar1.classList.remove('scrolledS');
    }
});
