$('.nav').on('mouseover', function (event) {
	// console.log(event);
});
$('.nav').on('click', function (event) {
	$('.nav').removeClass('navd');
	$(this).addClass('navd');
});
$('#hdr').on('mouseenter', function () {
	// console.log(event);
	$(this).stop();
	$(this).animate({
		backgroundColor: "#FFFFFF",
		borderBottomColor: "#000000"
	}, 500);
});
$('#hdr').on('mouseleave', function () {
	// console.log(event);
	$(this).stop();
	$(this).animate({
		backgroundColor: "#F0F0F0",
		borderBottomColor: "#F0F0F0"
	}, 500);
});

// var ascensor = $('#ascensor').ascensor({direction:"x",ascensorFloorName:['','TUTORIALS','PROJECTS'],loop:false,time:400,childType:'section'});

// $('.nav span').click(function(event, index) {
// 	ascensor.trigger('scrollToStage', $(this).index());
// });

