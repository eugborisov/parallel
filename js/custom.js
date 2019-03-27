// Content slide open
$(document).ready(function () {
  $('.toggle-title').click(function(){
      $(this).siblings('.toggle-content').slideToggle(300, 'easeOutSine');
  });
  $(".toggle-title").click(function() {
      $(this).toggleClass("active");
  });
})
// owl carousel
$(document).ready(function() {
  $('.default-slider').owlCarousel({
    items: 1,
    loop: false,
    center: true,
    margin: 0,
    nav:true,
    mouseDrag: false,
    touchDrag: false,
    callbacks: true,
    autoHeight:false,
    URLhashListener: true,
    autoplayHoverPause: false,
    startPosition: 'URLHash',
    autoplay:false,
    autoplayTimeout:6000,
    autoplaySpeed:1500,
    autoplayHoverPause:false,
    smartSpeed:800,
  });
})

// Content slide open
$(document).ready(function () {
  $('#header-search').click(function(){
      $('#search-result').slideDown(400, 'easeOutSine');
      $('#close-search').fadeIn('fast');
  });
  $('#close-search').click(function(){
      $('#search-result').slideUp(400, 'easeOutSine');
      $('#close-search').fadeOut('fast');
  });
  $('.showMore').click(function(){
      $('.longValue').toggleClass('open');
  });
})
            

// smooth scroll
$(document).ready(function() {
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .not('[href="#carouselExampleIndicators"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
});

// select
$(document).ready(function() {
  [].slice.call( document.querySelectorAll( 'select.cs-select' ) ).forEach( function(el) {  
    new SelectFx(el);
  } );
});

// Date picker
$(function(){
  $.datepicker.setDefaults(
    $.extend( $.datepicker.regional[ '' ] )
  );
  $( '#datepicker' ).datepicker();
});

// Content slide open
$(function(){
  $('.menu-button').click(function(){
      $('.navbar-mobile .nav-item').slideToggle(300, 'easeOutSine');
  });
})

// tooltips
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// selection-option
$(document).on('change', '.analysis-mode', function() {
  var target = $(this).data('target');
  var show = $("option:selected", this).data('show');
  $(target).children().addClass('hide');
  $(show).removeClass('hide');
});
$(document).ready(function(){
  $('.analysis-mode').trigger('change');
});
$(document).ready(function(){
$( '.company-table' ).on( 'mousewheel DOMMouseScroll', function ( e ) {
    var e0 = e.originalEvent,
        delta = e0.wheelDelta || -e0.detail;

    this.scrollTop += ( delta < 0 ? 1 : -1 ) * 30;
    e.preventDefault();
});
});

$(document).ready(function(){

  $('.dropdown-toggle').hover( function() {
    $(this).attr("aria-expanded", 'true');
    $(this).addClass('btn-hover');
    $('.dropdown-menu').addClass('show');
  });
  $(document).click(function(event) { 
  $target = $(event.target);
  if(!$target.closest('.dropdown-menu').length && 
  $('.dropdown-menu').hasClass("show")) {
    $('.dropdown-menu').removeClass('show');
    $('.dropdown-toggle').attr("aria-expanded", 'false');
    $('.dropdown-toggle').removeClass('btn-hover');
  }        
});
});
