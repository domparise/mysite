$(document).ready( function () {
	bindHoverWithBox( $('#about .content:eq(0)') );
	bindHoverWithBox( $('#about .content:eq(1)') );
	bindHoverWithBox( $('#about .content:eq(2)') );
});

/*
	also consider writing onclick functionality for hovered content paragraphs, which will persist the box content,
	and return to it after sliding away another hovered content section
	this click would also indent to the original settings, until clicked again

	upon clicking all 3, post picture of me pointing to left

	box-shadow: 0 2.5px 5px rgba(0,0,0,0.35) inset, 0 0 10px rgba(0,0,0,0.1) inset;
*/


// really really shitty hack to do this, but i was gettin impatient

/* left box vars */
var j=0,
	box = $('#box'), 
	inTimeout, outTimeout, innerInterval,
	boxOpen = false,
	inView = [];

function bindHoverWithBox (selector) {
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

