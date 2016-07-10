$(document).ready(function() {
	console.log('halo')
	$('.logo').mouseenter(function(){
			$(this).effect('bounce', { times: 2 } , 1000);
		});
});