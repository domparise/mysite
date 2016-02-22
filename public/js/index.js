$(document).ready( function () {
	var hash = window.location.hash.toLowerCase();
	console.log(hash);
	if (hash === '') hash = '#about';
	$(hash).show();
	$('#nav-'+hash.substr(1)).addClass('navd');
	$('.edge').animate({
		opacity: 1,
		backgroundColor: '#61B1B8'
	}, 1500);
	setTimeout( function () {
		$('.nav').animate({
			opacity: 0.30
			// opacity: 1
		}, 2000);
		$('.navd,'+hash).animate({
			opacity: 1,
			borderBottomColor: '#DC8930'
		}, 2000);
	}, 500);
	$('body').animate({
		backgroundColor: '#FAF6E0'
	}, 15000);
});

$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
	$('.navd').css('border-bottom-color','#FFFFFF');
	var navTo = $(this).get(0).id;
	window.location.hash = '#'+navTo.substr(4);
	$('section').stop('sections',true,false).animate({opacity:0},500,function(){
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
		borderBottomColor: '#DC8930'
	}, transitionTime);
});


function bindHover (selector) {
	console.log('bind');
	var i = 0,
	interval = 0,
	offset = selector.offset().top;
	selector.on('mouseenter',function () {
		console.log('hovered');
		clearInterval(interval);
		interval = setInterval(function() {
			offset -= i/50;
			selector.offset({top:offset});
			selector.css('box-shadow','0 '+((10/25)*i)+'px '+((5/25)*i)+'px rgba(0,0,0,'+((0.35/25)*i)+'), 0 0 '+((20/25)*i)+'px rgba(0,0,0,'+((0.1/25)*i)+')');
			if(i>=25){
				clearInterval(interval);
				j = 25;
			}
			else i += 1;
		},1);
	});
	selector.on('mouseleave',function() {
		clearInterval(interval);
		interval = setInterval(function() {
			offset += i/50;
			selector.offset({top:offset});
			selector.css('box-shadow','0 '+((10/25)*i)+'px '+((5/25)*i)+'px rgba(0,0,0,'+((0.35/25)*i)+'), 0 0 '+((20/25)*i)+'px rgba(0,0,0,'+((0.1/25)*i)+')');
			if(i<=0) clearInterval(interval);
			else i -= 1;
		},1);
	});
}

/*
	also consider writing onclick functionality for hovered content paragraphs, which will persist the box content,
	and return to it after sliding away another hovered content section
	this click would also indent to the original settings, until clicked again

	upon clicking all 3, post picture of me pointing to left

	box-shadow: 0 10px 5px rgba(0,0,0,0.35, 0 0 20px rgba(0,0,0,0.1);
*/


// really really shitty hack to do this, but i was gettin impatient

/* left box vars */
var j=0,
	box = $('#box'), 
	inTimeout, outTimeout, innerInterval,
	boxOpen = false,
	inView = [];

function bindHoverWithBox (selector) {
	console.log('bindw/box');
	var i = 0,
	interval = 0,
	offset = selector.offset().top,
	idx = selector.index();
	selector.on('mouseenter',function () {
		clearInterval(interval);
		interval = setInterval(function() {
			offset -= i/50;
			selector.offset({top:offset});
			selector.css('box-shadow','0 '+((10/25)*i)+'px '+((5/25)*i)+'px rgba(0,0,0,'+((0.35/25)*i)+'), 0 0 '+((20/25)*i)+'px rgba(0,0,0,'+((0.1/25)*i)+')');
			if(!boxOpen)
				box.css('box-shadow','0 '+((5/25)*i)+'px '+((10/25)*i)+'px rgba(0,0,0,'+((0.35/25)*i)+') inset, 0 0 '+((20/25)*i)+'px rgba(0,0,0,'+((0.1/25)*i)+') inset'); 
			if(i>=25){
				clearInterval(interval);
				j = 25;
			}
			else i += 1;
		},1);
		clearTimeout(inTimeout);
		clearTimeout(outTimeout);
		inTimeout = setTimeout(function() {
			$('#box span:eq('+idx+')').show('slide',{direction:'left',easing:'easeOutCubic'});
			boxOpen = true;
			j = 25;
		},300);
	});
	selector.on('mouseleave',function() {
		clearInterval(interval);
		interval = setInterval(function() {
			offset += i/50;
			selector.offset({top:offset});
			selector.css('box-shadow','0 '+((10/25)*i)+'px '+((5/25)*i)+'px rgba(0,0,0,'+((0.35/25)*i)+'), 0 0 '+((20/25)*i)+'px rgba(0,0,0,'+((0.1/25)*i)+')');
			if(i<=0) clearInterval(interval);
			else i -= 1;
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
}

/* random ktp wallpaper selection */
var wallpapers = ['/img/Wallpaper2.jpg','/img/Wallpaper3.jpg','/img/Wallpaper5.jpg','/img/Wallpaper6.jpg'], 
lastWP = 0, transComplete = false;
$('#about .content:eq(2)').on('mouseenter', function() {
	$('#ktpWallpaper').stop().animate({opacity:0.125});
	if(transComplete){
		document.getElementById('ktpWallpaper').src = wallpapers[(lastWP++)%4];
		transComplete = false;
	}
}).on('mouseleave', function() {
	$('#ktpWallpaper').stop().animate({opacity:0},function(){transComplete=true;});
});

window.onload = function () {
	console.log('loaded');
	bindHover( $('#javascript') );
	bindHover( $('#webdev') );
	bindHover( $('#nodejs') );

	bindHoverWithBox( $('#abt-right p:eq(0)') );
	bindHoverWithBox( $('#abt-right p:eq(1)') );
	bindHoverWithBox( $('#abt-right p:eq(2)') );

};
