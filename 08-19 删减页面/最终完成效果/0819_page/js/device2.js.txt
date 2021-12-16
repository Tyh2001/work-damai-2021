$(document).ready(function() {
	$(".item").css("width", $(window).width);
	$(".item").css("height", $(window).width() * 1.8);
	$(".itemborder").css("width", $(window).width - 40);
	$(".itemborder").css("height", $(window).width() * 1.8 - 40);

	// $(".fixborder").css("width", $(window).width - 40);
	$(".fixborder").css("height", $(window).width() * 1.8 - 40);
})
