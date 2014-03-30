$(document).ready( function () {
	var hash = window.location.hash.toLowerCase();
	console.log(hash);
	if (hash === '') hash = '#about';
	$(hash).show();
	$('#nav-'+hash.substr(1)).addClass('navd');
	$('.edge').animate({
		opacity: 1,
		backgroundColor: '#007CB2'
	}, 1500);
	setTimeout( function () {
		$('.nav').animate({
			opacity: 0.30
			// opacity: 1
		}, 2000);
		$('.navd,'+hash).animate({
			opacity: 1,
			borderBottomColor: '#FF9923'
		}, 2000);
	}, 500);
});

$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
	$('.navd').css('border-bottom-color','#FFFFFF');
	var navTo = $(this).get(0).id;
	window.location.hash = '#'+navTo.substr(4);
	$('section').stop('sections',true,false).animate({opacity:0},500,function(){
		$('section').hide();
		$('#'+navTo.substr(4)).show().animate({opacity:1},500);
	});
});

/* opacity of non-selected nav pieces */
var transitionTime = 400;
$('header').on('mouseenter', function () {
	$('.nav').stop().animate({
		opacity: 1
	}, transitionTime);
});
$('header').on('mouseleave', function () {
	$('header').stop().animate({
		opacity: 1,
	}, transitionTime);
	$('.nav').stop().animate({
		opacity: 0.30,
	}, transitionTime);
	$('.navd').stop().animate({
		opacity: 1,
		borderBottomColor: '#FF9923'
	}, transitionTime);
});

