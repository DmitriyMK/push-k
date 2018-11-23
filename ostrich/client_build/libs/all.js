$(document).ready(function() {

  $(function() {
    $('.accordion__header').click(function(e) {

      e.preventDefault();

      $(this).siblings('.accordion__body').slideToggle()
      .parent().toggleClass('active')
      .siblings().removeClass('active')
      .children('.accordion__body').slideUp();
    });
  });


  


  $(".btn__minus").click(function() {
    var $this = $(this);
    var quantity = parseInt($this.siblings(".accordion__num").val());
    if (quantity > 0) 
      quantity--; 
    $(this).siblings(".accordion__num").val(quantity);
    calcPrice();
  });


  $(".btn__plus").click(function() {
    var $this = $(this);
    var quantity = parseInt($this.siblings(".accordion__num").val()) + 1;
    $(this).siblings(".accordion__num").val(quantity);
    calcPrice();
  });



  var calcPrice = function() {
    var sumPrice = $(".sumPrice");

    var priceAdult = parseInt($('.priceAdult').html());
    var quantityAdult = parseInt($(".amountTicketsAdults").val());
    var priceChildren = parseInt($(".priceChildren").html());
    var quantityChildren = parseInt($(".amountTicketsChildren").val());

    var totalPrice = priceAdult * quantityAdult + priceChildren * quantityChildren;
    sumPrice.html(totalPrice);
  };


  $('.phone-mask').mask('+38(999)999-99-99');


});