(function($){
"use strict";

$(document).ready(function() {


	var win_h 						= $(window).height(),
		win_w 						= $(window).width(),
		headerHeight 				= $('header').height(),
		footerHeight 				= $('footer').height(),
		navMainLinks;


	// ----------------------
	// Global
	// ----------------------
		
		// After loading all images
		$('body').imagesLoaded( function() {

			// Drawing layouts after loading all images.
			draw();

			// Hide loading screen
			$("body > .loader").delay(1200).fadeOut(550, function() {
	    		$("body").addClass('loaded');
	    	});
		});

		$(window).resize(function() {
			draw();
		});


	// ----------------------
	// Menu - Responsive
	// ----------------------

		//Mobile/Tablet Menu Icon
		$("header .menu-icon").on("click",function() {

			if(!$("header").hasClass('showNav')){

				if($("header nav > ul").height() < (win_h-300)) {

					var wantedHeight = (win_h/2) - ($("header nav ul").height()/2);

					$("header nav > ul").css('padding', wantedHeight+'px 0');

					if(win_w <= 768) {
						$("header nav > ul").css('padding', wantedHeight+'px 0 '+(wantedHeight-$("footer").outerHeight())+'px');
					}
				}

				if(win_w <= 768) {
					$("header nav > ul").after($("footer"));
				}

				$("body, html, header, footer").addClass("showNav");
			}
			else {

				if(win_w <= 768) {
					$("main").after($("footer"));
				}

				$(this).siblings('nav').find('ul').attr('style', '');

				$("body, html, header, footer").removeClass("showNav");
			}
		});

		//Mobile/Tablet Menu Link
		$("body").on('click', 'header.showNav nav a', function(event) {

	        if($(this).siblings("ul").length > 0) {
	            event.preventDefault();
	        }

	        if($(this).next().hasClass('active')) {

		        $(this).next().slideToggle(500);
		        $(this).next().removeClass('active');
	        }
	        else {

	        	$(this).parent().siblings('li').find('> ul.active').slideToggle(500);
	        	$(this).parent().siblings('li').find('> ul.active').removeClass('active');

		        $(this).next().addClass('active');
		        $(this).next().slideToggle(500);
	        }
	    });


	// ----------------------
	// Portfolio
	// ----------------------

		// Swiper
		if($(".swiper-container").length > 0) {

    		var swiper = new Swiper('.swiper-container', {
    			slidesPerView: 1,
    			speed: 650,
    			grabCursor: true,
    			mousewheel: true,
				keyboard: {
					enabled: true,
				},
				navigation: {
					nextEl: '.swiper-next',
					prevEl: '.swiper-prev',
				},
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
					renderBullet: function (index, className) {
						return '<span class="' + className + '"></span>';
					},
				},
			});

    		$(".swiper-pagination span:first-child").before('<div class="pagination-line"></div>');

			var paginationWidth = ($(".swiper-pagination span").length * $(".swiper-pagination span").outerWidth(true)) - 60;

			$(".swiper-pagination .pagination-line").width(paginationWidth);

		}

		// Text Slider
		if($(".text-slider").length > 0) {

			$(".text-slider .row a").each(function() {
				
				var index = ($(this).parent().index()*2) + $(this).index();

				$(this).attr('data-index', index);

				$(this).attr('data-bg', $(".text-slider .slides li").eq(index).css('background-image'));
			});

			$(".text-slider .row a").on('mouseenter', function() {

				var index = $(this).attr('data-index'),
					wantedElement = $(".text-slider .slides li").eq(index);

				if(!wantedElement.hasClass('active') && win_w > 1280) {

					$(".text-slider .slides .was-active").removeClass('was-active');
					$(".text-slider .slides .active").removeClass('active').addClass('was-active');
					wantedElement.removeClass('was-active').addClass('active');
				}
			});

			$(".text-slider .content").on('mouseleave', function() {

				$(".text-slider .slides li").removeClass('active was-active');
			});
		}

		// Single Projects - Images animations
		if($(".single-project").length > 0) {

			$(".single-project .images li").appear();
			
			$("body").on('appear', '.single-project .images li', function() {
				$(this).addClass('appeared');
			});
		}


	/*
	===========================================================
	===========================================================
		Functions
	===========================================================
	===========================================================
	*/

		// Drawing layouts after loading all images.
		function draw() {


			// ----------------------
			// Global
			// ----------------------

				win_h 			= $(window).height();
				win_w 			= $(window).width();
				headerHeight 	= $('header').height();
				footerHeight 	= $('footer').height();


			// Wide Screens (Desktop)
			if(win_w > 1280) {


				// ----------------------
				// Global
				// ----------------------

					$("body, html").removeClass("showNav");

				// ----------------------
				// Header
				// ----------------------

					$("header").removeClass("mobile-tablet showNav");
					$("header nav ul").attr('style','');
					$("main").after($("footer"));

					// Dropdowns shifting to left on overflow
					navMainLinks = $("header > nav > ul > li").length;
					for (var i = 1; i < navMainLinks+1; i++) {
						if($("header > nav > ul > li:nth-of-type(" + i + ") ul").length > 0){

							$("header > nav > ul > li:nth-of-type(" + i + ") ul ").each(function(){
								if((win_w - ($(this).offset().left)) < 170){
									$("header > nav > ul > li:nth-of-type(" + i + ")").addClass("left");
								}
							});
						}
					}


				// ----------------------
				// Footer
				// ----------------------

					$("footer").removeClass("mobile-tablet showNav");


				// ----------------------
				// Portfolio
				// ----------------------

					// Text Slider
					if($(".text-slider").length > 0) {

						$(".text-slider .row a").each(function() {

							$(this).find('.wrap').before($(this).find('span'));
							$(this).find('.wrap').remove();
						});

						if($(".text-slider .content").height() > (win_h-300)) {
							$(".text-slider .content").addClass('tall');
						}
						else {
							$(".text-slider .content").removeClass('tall');
						}
					}

			}
			// Medium & Small Screens (Tablet & Mobile)
			else if(win_w <= 1280) {


				// ----------------------
				// Header
				// ----------------------

					$("header").addClass("mobile-tablet");
					$("header > nav > ul > li.left").removeClass("left");


				// ----------------------
				// Footer
				// ----------------------

					$("footer").addClass("mobile-tablet");


				// ----------------------
				// Portfolio
				// ----------------------

					// Text Slider
					if($(".text-slider").length > 0) {

						$(".text-slider .row a").each(function() {
							
							var img = $(this).attr('data-bg');

							if(!$(this).find('.wrap').length > 0) {
								$(this).find('span').wrap('<div class="wrap"></div>');
							}

							$(this).find('.wrap').css('background-image', img);
						});

						if($(".text-slider .content").height() > (win_h-300)) {
							$(".text-slider .content").addClass('tall');
						}
					}
			}
		}



		// Get total floating width of an element
		$.fn.totalWidth = function( ) {
			return $(this)[0].getBoundingClientRect().width;
		};


		// Get total floating height of an element
		$.fn.totalHeight = function( ) {
			return $(this)[0].getBoundingClientRect().height;
		};

});


})(jQuery);