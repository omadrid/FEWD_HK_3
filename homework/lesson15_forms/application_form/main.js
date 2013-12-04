$('.clickable').on('click', function () {
	$('.clicked').removeClass('clicked');
	$(this).addClass('clicked');
});