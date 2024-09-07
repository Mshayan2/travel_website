const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu ul');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
});
