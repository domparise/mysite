var k = kontext( document.querySelector( '.kontext' ) );


// API METHODS:

// k.prev(); // Show prev layer
// k.next(); // Show next layer
// k.show( 3 ); // Show specific layer
// k.getIndex(); // Index of current layer
// k.getTotal(); // Total number of layers


document.addEventListener( 'keyup', function( event ) {
	if( event.keyCode === 37 ) k.prev();
	if( event.keyCode === 39 ) k.next();
}, false );

var touchX = 0;
var touchConsumed = false;

document.addEventListener( 'touchstart', function( event ) {
	touchConsumed = false;
	lastX = event.touches[0].clientX;
}, false );

document.addEventListener( 'touchmove', function( event ) {
	event.preventDefault();

	if( !touchConsumed ) {
		if( event.touches[0].clientX > lastX + 10 ) {
			k.prev();
			touchConsumed = true;
		}
		else if( event.touches[0].clientX < lastX - 10 ) {
			k.next();
			touchConsumed = true;
		}
	}
}, false );


$(document).ready( function () {
	setTimeout( function() {
		$('#hdr').animate({
			opacity: 1,
			backgroundColor: "#FFFFFF",
			borderBottomColor: "#888888"
		}, 1500);
	}, 500);
});
$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
});
$('#hdr').on('mouseenter', function () {
	// console.log(event);
	$(this).stop();
	$(this).animate({
		opacity: 1,
		color: "#000000",
		backgroundColor: "#FFFFFF",
		borderBottomColor: "#888888"
	}, 500);
});
$('#hdr').on('mouseleave', function () {
	// console.log(event);
	$(this).stop();
	$(this).animate({
		// opacity: 0.25,
		color: "#FFFFFF",
		backgroundColor: "rgba(240,240,240,0)",
		borderBottomColor: "rgba(240,240,240,0)"
	}, 500);
});


$('#nav-about').on('click', function (event) {
	k.show(0);
});

$('#nav-tut').on('click', function (event) {
	k.show(1);
});

$('#nav-proj').on('click', function (event) {
	k.show(2);
});


