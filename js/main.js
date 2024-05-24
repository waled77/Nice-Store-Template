var menuToggler = document.getElementById('menu-toggler');
var menuLinks = document.getElementById('list-links');

menuToggler.addEventListener('click', function() {

    menuLinks.classList.toggle('show');
    this.classList.toggle('active');

});







