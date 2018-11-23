$(document).ready(function() {

  $(function() {
    $('.accordion__header').click(function(e) {

      e.preventDefault();

      $(this).siblings('.accordion-body').slideToggle()
      .parent().toggleClass('active')
      .siblings().removeClass('active')
      .children('.accordion-body').slideUp();
    });
  });


  $('.phone-mask').mask('+38(999)999-99-99');

});