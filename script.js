
// menuicon toggle 
const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('header ul');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // change icon to 'X'
}

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});
ScrollReveal().reveal('.textBox ', { origin: 'top' });
ScrollReveal().reveal('.socialmedia, .imgBox', { origin: 'bottom' });
ScrollReveal().reveal('.morepepsies', { origin: 'left' });
// ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });