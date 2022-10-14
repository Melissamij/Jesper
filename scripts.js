// hamburger menu

$('.hamburger-button').click(function(){
    $('.mobile-menu').slideToggle(500);
    $(this).toggleClass('active');
  });

  // animate on scroll activate 
AOS.init({
    duration: 500
});