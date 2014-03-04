$(document).ready( function () {
	$('#projects').hide();
	$('#tutorials').hide();
	$('.edge').animate({
		opacity: 1,
		color: '#FFFFFF',
		// backgroundColor: '#00B2FF'
		backgroundColor: '#007CB2'
	}, 1500);
	setTimeout( function () {
		$('.nav').animate({
			opacity: 0.30,
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

var transitionTime = 400;
$('header,footer').on('mouseover', function () {
	$('header,footer').stop().animate({
		opacity: 1,
		// backgroundColor: '#007CB2'
	}, transitionTime);
	$('.nav').stop().animate({
		opacity: 1,
		// color: '#FFFFFF'
	}, transitionTime);
});
$('header,footer').on('mouseout', function () {
	$('header,footer').stop().animate({
		opacity: 1,
		// backgroundColor: '#00B2FF'
	}, transitionTime);
	$('.nav').stop().animate({
		opacity: 0.30,
		// color: '#FFFFFF'
	}, transitionTime);
	$('.navd').stop().animate({
		opacity: 1,
		borderBottomColor: '#FF9923'
	}, transitionTime);
});


/* currently nothing placed on bottom bar, too much movement onscreen */
/* 
$('footer').on('vmouseover', function () {
	$(this).stop().animate({
		top: '-=7.5%',
		height: '+=7.5%',
		backgroundColor: '#007CB2'
	},250);
});
$('footer').on('vmouseover', function () {
	$(this).stop().animate({
		height: '2.5%',
		top: '97.5%',
		backgroundColor: '#00B2FF'
	},250);
});
*/


// really really shitty hack to do this, but i was gettin impatient
var i = [0,0,0], 
	that = [0,0,0],
	interval = [0,0,0], 
	offset = [0,0,0];
$('.content').on('mouseover',function(){
	$(this).stop().animate({
		backgroundColor:'#FFFFFF'
	},250);
	var idx = $(this).index();
	that[idx] = $(this);
	offset[idx] = $(this).offset().top;
	clearInterval(interval[idx]);
	interval[idx] = setInterval(function() {
		offset[idx] -= i[idx]/50;
		that[idx].offset({top:offset[idx]});
		that[idx].css('box-shadow','0 '+((10/25)*i[idx])+'px '+((5/25)*i[idx])+'px rgba(0,0,0,'+((0.35/25)*i[idx])+'), 0 0 '+((20/25)*i[idx])+'px rgba(0,0,0,'+((0.1/25)*i[idx])+')');
		if(i[idx]>=25) clearInterval(interval[idx]);
		else i[idx] += 1;
	},1);
});
$('.content').on('mouseout',function(){
	$(this).stop().animate({
		backgroundColor:'#FAFAFA'
	},250);
	var idx = $(this).index();
	that[idx] = $(this);
	clearInterval(interval[idx]);
	interval[idx] = setInterval(function() {
		offset[idx] += i[idx]/50;
		that[idx].offset({top:offset[idx]});
		that[idx].css('box-shadow','0 '+((10/25)*i[idx])+'px '+((5/25)*i[idx])+'px rgba(0,0,0,'+((0.35/25)*i[idx])+'), 0 0 '+((20/25)*i[idx])+'px rgba(0,0,0,'+((0.1/25)*i[idx])+')');
		if(i[idx]<=0) clearInterval(interval[idx]);
		else i[idx] -= 1;
	},1);
});
