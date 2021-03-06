
(function ($) {
	"use strict"


$(document).ready(function () {
	


	
	
	$('body').scrollspy({ target: '#mainmenu' })
    /*--------------------
        * Header Fixed
    ----------------------*/

	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();

		if(scroll >= 400) {
			$(".navbar").addClass("menu-show");
			$(".right-menu-btn").addClass("menu-bar-hide");
		} else {
			$(".navbar").removeClass("menu-show");
			$(".right-menu-btn").removeClass("menu-bar-hide");
		}
	});
    
	
	
	// Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
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
	//# sourceURL=pen.js


	//-----------------------------------------------------------------------------------------------



		
		
	// SHOW - HIDE - BOX SEARCH ON MENU
	$('body .right-menu-btn').click(function () {
		$('body .right-menu-btn').toggleClass('hide');
	});
	
	$('body .right-menu li a').click(function () {
		$('body .right-menu-btn').addClass('hide');
	});
	

	// HIDE BOX SEARCH WHEN CLICK OUTSIDE
 	if ($(window).width() > 767){
		$('body').click(function (event) {
			if ($('body .right-menu').has(event.target).length == 0 && !$('body .right-menu').is(event.target)
				&& $('body .right-menu-btn').has(event.target).length == 0 && !$('body .right-menu-btn').is(event.target)) {
				if ($('body .right-menu-btn').hasClass('hide') == false) {
					$('body .right-menu-btn').toggleClass('hide');
				};
			}
		});
	};
	
	
		
 		
	/*========== Start Counter To Js skillbar   ==========*/

	if ($('.skillbar').length) {
		$(window).on('scroll.skillbar', function () {
			var stat = $('.skillbar');
			if ($(this).scrollTop() >= stat.offset().top - $(window).height() + 0) {
				$('.skillbar').skillBars({
					from: 0,
					speed: 3000, 
					interval: 100,
					decimals: 0,
				});
				$(window).off('scroll.skillbar');
			}
		});
	}
	
		
	/*========== Start Counter To Js funfact   ==========*/

	if ($('.funfact').length) {
		$(window).on('scroll.funfact', function () {
			var stat = $('.funfact');
			if ($(this).scrollTop() >= stat.offset().top - $(window).height() + 0) {
				$('.count').countTo();
				$(window).off('scroll.count');				
			}
		});
	}
	
		
		
    /*========== Start Portfolio isotop Js ==========*/

	// start isotop
	// init Isotope
	var $grid = $('.grid').isotope({
	  // options
	});
	// filter items on button click
	$('.projects-filter').on( 'click', 'li', function() {
	  var filterValue = $(this).attr('data-filter');
	  $grid.isotope({ filter: filterValue });
	});
	$('.projects-filter').on( 'click', 'li', function() {
	  $(this).addClass('active').siblings().removeClass('active');

	});


	$('.grid').isotope({
	 // options
	 itemSelector: '.element-item',
	 layoutMode: 'fitRows'
	});
	
    /*========== End Portfolio isotop Js ==========*/
    
    /*========== Start OWL Carousel Js testimonial   ==========*/
	if ($('.testimonial').length) {
		$('.testimonial').owlCarousel({
		  loop:true,
		  margin:30,
		  nav:true,
		  smartSpeed: 700,
		  autoplay: false,
		  navText: [ '<span class="fa fa-long-arrow-left"></span>', '<span class="fa fa-long-arrow-right"></span>' ],
		  responsive:{
			0:{
			  items:1
			},
			600:{
			  items:1
			},
			800:{
			  items:2
			},
			1024:{
			  items:3
			},
			1200:{
			  items:3
			}
		  }
		});       
	};
		
    /*========== Start sponsor OWL Carousel Js    ==========*/

	if ($('.owl-sponsor').length) {
		$('.owl-sponsor').owlCarousel({
		  loop:true,
		  margin:30,
		  nav:false,
		  smartSpeed: 700,
		  autoplay: true,
		  navText: [ '<span class="fas fa-arrow-left"></span>', '<span class="fas fa-arrow-right"></span>' ],
		  responsive:{
			0:{
			  items:2
			},
			600:{
			  items:3
			},
			800:{
			  items:4
			},
			1024:{
			  items:5
			},
			1200:{
			  items:6
			}
		  }
		});       
	};

 
});


}(jQuery));