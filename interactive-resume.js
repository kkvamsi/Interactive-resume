$(document).ready(function(){

$('.submit').click(function(){
	$('.right-div .fname').html($('.left-div .fname').val());
	$('.right-div .lname').html($('.left-div .lname').val());
	$('.right-div .contact').html($('.left-div .contact').val());
	$('.right-div .email').html($('.left-div .email').val());
});

});
