$(document).ready( function () {
	bindHover( $('#javascript') );
	bindHover( $('#webdev') );
	bindHover( $('#node') );
});

function bindHover (selector) {
	var i = 0,
	interval = 0,
	offset = selector.offset().top;
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

