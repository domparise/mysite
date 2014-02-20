$(document).ready( function () {
	$('#hdr').animate({
		opacity: 1,
		color: '#FFFFFF',
		backgroundColor: '#00B2FF'
	}, 1500);
	setTimeout( function () {
		$('.nav').animate({
			opacity: 0.50,
			color: '#FFFFFF',
		}, 2000);
		$('.navd').animate({
			opacity: 1,
			borderBottomColor: '#FF9923'
		}, 2000);
	}, 500);
});
$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
	$('.navd').css('border-bottom-color','#FFFFFF');
});
$('#hdr').on('mouseenter', function () {
	$(this).stop().animate({
		opacity: 1,
		color: '#00B2FF',
		backgroundColor: '#007CB2'
	}, 500);
	$('.nav').stop().animate({
		opacity: 1,
		color: '#FFFFFF'
	}, 500);
});
$('#hdr').on('mouseleave', function () {
	$(this).stop().animate({
		opacity: 1,
		color: '#FF9923',
		backgroundColor: '#00B2FF'
	}, 500);
	$('.nav').stop().animate({
		opacity: 0.50,
		color: '#FFFFFF'
	}, 500);
	$('.navd').stop().animate({
		opacity: 1,
		color: '#FFFFFF',
		borderBottomColor: '#FF9923'
	}, 500);
});

