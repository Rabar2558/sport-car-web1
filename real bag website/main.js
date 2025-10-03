
let search = document.querySelector('.search-box');


document.querySelector('#search-icon').onclick = () => {
  search.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function() {
  const boxes = document.querySelectorAll('.box');

  const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('animate__animated', 'animate__fadeInUp');
              observer.unobserve(entry.target); // Stop observing once animated
          }
      });
  }, options);
 
  document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll('.social a');

    socialLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Add a class to create a click effect
            this.classList.add('clicked');

            // Remove the class after a short delay
            setTimeout(() => {
                this.classList.remove('clicked');
            }, 300); // Duration of the effect
        });
    });
}); 
//header animation
let header = document.querySelector('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('active', window.scrollY > 0);
});
});
document.getElementById('menu-icon').addEventListener('click', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('active'); // Toggle a class to show/hide the menu
});
