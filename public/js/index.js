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
			// opacity: 0.30
			opacity: 1
		}, 2000);
		$('.navd,'+hash).animate({
			opacity: 1
			// borderBottomColor: '#FF9923'
		}, 2000);
	}, 500);
});

$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
	// $('.navd').css('border-bottom-color','#FFFFFF');
	var navTo = $(this).get(0).id;
	window.location.hash = '#'+navTo.substr(4);
	$('section').stop('sections',true,false).animate({opacity:0},500,function(){
		$('section').hide();
		$('#'+navTo.substr(4)).show().animate({opacity:1},500);
	});
});

/* opacity of non-selected nav pieces */
/*var transitionTime = 400;
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

/* goofy mouseover header resize */
var navInterval = [0,0,0], navCount = [0,0,0];
$('.nav').on('mouseenter', function() {
	var idx = $(this).index();
	clearInterval(navInterval[idx]);
	navInterval[idx] = setInterval( function() {
		var percnt = String(100 + navCount[idx]);
		console.log(percnt);
		$('.nav:eq('+idx+')').css('font-size',percnt+'%');
		if(navCount[idx]>=30) clearInterval(navInterval[idx]);
		else navCount[idx]++;
	},1);
}).on('mouseleave', function() {
	var idx = $(this).index();
	clearInterval(navInterval[idx]);
	navInterval[idx] = setInterval( function() {
		var percnt = String(100 + navCount[idx]);
		$('.nav:eq('+idx+')').css('font-size',percnt+'%');
		if(navCount[idx]<=0) clearInterval(navInterval[idx]);
		else navCount[idx]--;
	},1);
});

/*
	also consider writing onclick functionality for hovered content paragraphs, which will persist the box content,
	and return to it after sliding away another hovered content section
	this click would also indent to the original settings, until clicked again

	upon clicking all 3, post picture of me pointing to left

	box-shadow: 0 2.5px 5px rgba(0,0,0,0.35) inset, 0 0 10px rgba(0,0,0,0.1) inset;
*/


// really really shitty hack to do this, but i was gettin impatient
var i = [0,0,0], j=0,
	that = [0,0,0],
	interval = [0,0,0], 
	offset = [0,0,0], 
	/* left box vars */
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
/* random ktp wallpaper selection */
var wallpapers = ['/img/Wallpaper2.jpg','/img/Wallpaper3.jpg','/img/Wallpaper5.jpg','/img/Wallpaper6.jpg'], 
lastWP = 0, transComplete = false;
$('#about .content:eq(2)').on('mouseenter', function() {
	$('#ktpWallpaper').stop().animate({opacity:0.10});
	if(transComplete){
		document.getElementById('ktpWallpaper').src = wallpapers[(lastWP++)%4];
		transComplete = false;
	}
}).on('mouseleave', function() {
	$('#ktpWallpaper').stop().animate({opacity:0},function(){transComplete=true;});
});

