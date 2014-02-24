$(document).ready( function () {
	$('#projects').hide();
	$('#tutorials').hide();
	$('.edge').animate({
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
		$('#about').animate({
			opacity: 1
		}, 2000);
	}, 500);
});

$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
	$('.navd').css('border-bottom-color','#FFFFFF');
	var navTo = $(this).get(0).id;
	$('section').stop('sections',true,false).animate({opacity:0},500,function(){
		$('section').hide();
		if (navTo === 'nav-about') {
			$('#about').show().animate({opacity:1},500);
		} else if (navTo === 'nav-tut') {
			$('#tutorials').show().animate({opacity:1},500);
		} else if (navTo === 'nav-proj') {
			$('#projects').show().animate({opacity:1},500);
		}
	});
});


$('header').on('mouseenter', function () {
	$('.edge').stop('color',true,false).animate({
		opacity: 1,
		backgroundColor: '#007CB2'
	}, 500);
	$('.nav').stop('color',true,false).animate({
		opacity: 1,
		color: '#FFFFFF'
	}, 500);
});
$('header').on('mouseleave', function () {
	$('.edge').stop('color',true,false).animate({
		opacity: 1,
		backgroundColor: '#00B2FF'
	}, 500, 'easeOutQuad');
	$('.nav').stop('color',true,false).animate({
		opacity: 0.50,
		color: '#FFFFFF'
	}, 500);
	$('.navd').stop('color',true,false).animate({
		opacity: 1,
		borderBottomColor: '#FF9923'
	}, 500);
});


$('footer').on('mouseenter', function () {
	$(this).stop().animate({
		top: '-=7.5%',
		height: '+=7.5%'
	},250);
});
$('footer').on('mouseleave', function () {
	$(this).stop().animate({
		height: '2.5%',
		top: '97.5%'
	},250);
});

