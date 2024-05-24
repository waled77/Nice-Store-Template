$(document).ready(function() {

    $('.spinner').fadeOut(1500);

    $('.navbar ul li a').on('click', function() {

        $('.navbar ul li a').removeClass('active');
        $(this).addClass('active');
        

    });

});