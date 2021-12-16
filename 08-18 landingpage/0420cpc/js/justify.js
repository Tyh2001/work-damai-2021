$(document).ready(function() {
	$(".fengmian").css("height", $(".fengmian").width() * 0.59);
});

$(window).resize(function() {
	$(".fengmian").css("height", $(".fengmian").width() * 0.59);
});

// $("#navbtn1").click(function() {
// 	// $(".thumbnail-bg").css("height", $(".thumbnail-bg").width() * 0.716);
// 	// $(".thumbnail-bg").css("height", $(".thumbnail-bg").width() * 0.716);
// 	var a = $(".thumbnail-bg").width();
// 	alert(a);
// });
$('#myModal1').on('shown.bs.modal', function (e) {
  // do something...
  	$(".thumbnail-bg").css("height", $(".thumbnail-bg").width() * 0.6);
  	var a = $(".thumbnail-bg").width();
  	// alert(a);
})