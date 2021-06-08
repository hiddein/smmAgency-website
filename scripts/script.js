
$(document).ready(function(){
    $('.header__burger').click(function(){
    $('.header__burger,.header__menu').toggleClass('active');
    $('body').toggleClass('lock');
    });
$('.main__text_t').animate({opacity:1},2000); 
		$(".owl-carousel").owlCarousel({

                items: 1,
                loop: true,
                dots: true

        });
 


$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
        $('#button').addClass('show');
  } else {
        $('#button').removeClass('show');
  }
});

$('#button').on('click', function() {
  $('html, body').animate({scrollTop:0}, 600);
});


});

