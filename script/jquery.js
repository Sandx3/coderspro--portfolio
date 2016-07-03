$(document).ready(function() {
	$('.logo').mouseenter(function(){
		$(this).animate({
			height: '+=10px'
		});
	});

	$('.logo').mouseleave(function(){
		$(this).animate({
			height: '-=10px'
		});
	});
});