hamburger = document.querySelector('.hamburger');
hamburger.onclick = function() {
    navBar = document.querySelector('#main_nav');
    navBar.classList.toggle('active');
}


//TO get the current year in the footer copyright.
document.addEventListener('DOMContentLoaded', function() {
    var currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
   });


const redirectContact = document.querySelector('#contact-btn');
redirectContact.onclick = function(){
    window.location.href='contact.html'
}