
$(document).ready(function(){
	console.log("welcome to aja");

// Header shrinks on scroll
	$(window).scroll(function() {
  		if ($(document).scrollTop() > 530) {
  			console.log("nav shrinks");
    		$('.navbar').addClass('shrink');
    		console.log("h1 hides");
    		$('h1').addClass('hide');
  		} else {
    		$('.navbar').removeClass('shrink');
    		$('h1').removeClass('hide');
  		}
	});
});


