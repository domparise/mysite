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
		backgroundColor: "#FFFFFF",
		borderBottomColor: "#888888"
	}, 500);
});
$('#hdr').on('mouseleave', function () {
	// console.log(event);
	$(this).stop();
	$(this).animate({
		opacity: 0.25,
		backgroundColor: "rgba(240,240,240,0)",
		borderBottomColor: "rgba(240,240,240,0)"
	}, 500);
});

// var ascensor = $('#ascensor').ascensor({direction:"x",ascensorFloorName:['','TUTORIALS','PROJECTS'],loop:false,time:400,childType:'section'});

// $('.nav span').click(function(event, index) {
// 	ascensor.trigger('scrollToStage', $(this).index());
// });

