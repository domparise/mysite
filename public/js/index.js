$(document).ready( function () {
	$('#projects').hide();
	$('#tutorials').hide();
	$('.edge').animate({
		opacity: 1,
		backgroundColor: '#007CB2'
	}, 1500);
	setTimeout( function () {
		$('.nav').animate({
			opacity: 0.30
		}, 2000);
		$('.navd,#about').animate({
			opacity: 1,
			borderBottomColor: '#FF9923'
		}, 2000);
	}, 500);

var type = window.location.hash.substr(1);
console.log(type);

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

/*
	also consider writing onclick functionality for hovered content paragraphs, which will persist the box content,
	and return to it after sliding away another hovered content section
	this click would also indent to the original settings, until clicked again

	upon clicking all 3, post picture of me pointing to left
*/


// really really shitty hack to do this, but i was gettin impatient
var i = [0,0,0], j=0,
	that = [0,0,0],
	interval = [0,0,0], 
	offset = [0,0,0], 
	box = $('#box'), 
	inTimeout, outTimeout, innerInterval,
	boxOpen = false,
	inView = [];
$('#about .content').on('mouseenter',function(){
	var idx = $(this).index();
	that[idx] = $(this);
	offset[idx] = $(this).offset().top;
	clearInterval(interval[idx]);
	interval[idx] = setInterval(function() {
		offset[idx] -= i[idx]/50;
		that[idx].offset({top:offset[idx]});
		that[idx].css('box-shadow','0 '+((10/25)*i[idx])+'px '+((5/25)*i[idx])+'px rgba(0,0,0,'+((0.35/25)*i[idx])+'), 0 0 '+((20/25)*i[idx])+'px rgba(0,0,0,'+((0.1/25)*i[idx])+')');
		if(!boxOpen)
			box.css('box-shadow','0 '+((5/25)*i[idx])+'px '+((10/25)*i[idx])+'px rgba(0,0,0,'+((0.35/25)*i[idx])+') inset, 0 0 '+((20/25)*i[idx])+'px rgba(0,0,0,'+((0.1/25)*i[idx])+') inset'); 
		if(i[idx]>=25){
			clearInterval(interval[idx]);
			j = 25;
		}
		else i[idx] += 1;
	},1);
	clearTimeout(inTimeout);
	clearTimeout(outTimeout);
	inTimeout = setTimeout(function() {
		$('#box span:eq('+idx+')').show('slide',{direction:'left',easing:'easeOutCubic'});
		boxOpen = true;
		j = 25;
	},300);
});
$('#about .content').on('mouseleave',function(){
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
	$('#box span').hide('slide',{direction:'right',easing:'easeInCubic'});
	clearTimeout(inTimeout);
	outTimeout = setTimeout(function() {
		innerInterval = setInterval(function() {
			box.css('box-shadow','0 '+((5/25)*j)+'px '+((10/25)*j)+'px rgba(0,0,0,'+((0.35/25)*j)+') inset, 0 0 '+((20/25)*j)+'px rgba(0,0,0,'+((0.1/25)*j)+') inset');
			if(j<=0) clearInterval(innerInterval);
			else j -= 1;
		},1);
		boxOpen = false;
		$('#box span').hide();
	},500);
});

function closeBox() {

}
