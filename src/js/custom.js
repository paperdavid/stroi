/**************************************/
/* Custom JavaScript files supervisor */
/**************************************/

$(document).ready(function() {

		/* Custom */

		//= ./common/likely.js
		//= ./common/owl.carousel.min.js



	$('.loop').owlCarousel({
			center: true,
			items:3,
			loop:true,
			margin:10,
			responsive:{
						0:{
								items:1
						},
						600:{
								items:2
						},
						1000:{
								items:3
						}
			}
	});

	$('.about').owlCarousel({
			center: true,
			items:3,
			autoplay:2000,
			loop:true,
			margin:10,
			responsive:{
						0:{
								items:1
						},
						600:{
								items:2
						},
						1000:{
								items:3
						}
			}
	});
});