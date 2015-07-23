
$(document).ready(function(){
	console.log("we are Porky Pig!");

// Header shrinks on scroll
	$(window).scroll(function() {
  		if ($(document).scrollTop() > 306) {
    		$('nav').addClass('fixed');
    		$('.container-two').addClass('down');
  		} else {
    		$('nav').removeClass('fixed');
    		$('.container-two').removeClass('down');
  		}
	});


// Adding Active State to Nav Buttons

	$(".nav-button").click(function(){

		$(".nav-button").removeClass("active");
		$(this).addClass("active");
	});


//  Back to top on click

	$("nav #nav-top").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#top"),400, {
			"offset" :-00
		});
	});


//  Jump to Work

	$("nav #nav-work").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#work"),400, {
			"offset" :-00
		});
	});

//  Jump to News

	$("nav #nav-news").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#news"),400, {
			"offset" :-00
		});
	});

//  Jump to Blog

	$("nav #nav-blog").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#blog"),400, {
			"offset" :-00
		});
	});

//  Jump to About

	$("nav #nav-about").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#about"),400, {
			"offset" :-00
		});
	});

//  Jump to Network

	$("nav #nav-network").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#network"),400, {
			"offset" :-00
		});
	});

//  Jump to Contact

	$("nav #nav-contact").click(function(){
		console.log("clicked!");

		$.scrollTo( $("#contact"),400, {
			"offset" :-00
		});
	});


});







