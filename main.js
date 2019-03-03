jQuery(document).ready(function(){

  $('.show-modal').click(function () {
    $('.modal-overlay').addClass('active');
    $(document.body).addClass('modal-opened');
    var top = $(document).scrollTop();
    $('.modal-overlay').css('top', top);
  });
  $('[data-close]').click(':not(.modal-body)', function () {
    $('.modal-overlay').removeClass('active');
    $(document.body).removeClass('modal-opened');
  });

  $('.modal-body').click(function(event){
    event.stopPropagation();
    event.preventDefault();
  });

  $('.slider-container').slick({
    dots: true,
    autoplay: true,
    autoplaySpeed: 3000
  });



});