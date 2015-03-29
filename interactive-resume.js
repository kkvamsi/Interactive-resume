$(document).ready(function(){

$('.submit').click(function(){
	$('.right-div .fname').html($('.left-div .fname').val());
	$('.right-div .lname').html($('.left-div .lname').val());
	$('.right-div .contact').html($('.left-div .contact').val());
	$('.right-div .email').html($('.left-div .email').val());
});

});

function keyPress()
    {
        if(($("#fname").val().length + $("#lname").val().length)>0){    
        var fullName = "My name is " + $("#fname").val() + " " + $("#lname").val();
		$("#rname").text(fullName);
		}
		
		if($("#contact").val().length>0){
		var contactNum = "I am reachable at " + $("#contact").val();
		$("#rcontact").text(contactNum);
		}
		
		if($("#email").val().length>0){
		var emailAdd = "Also you can send a mail to " + $("#email").val();
		$("#remail").text(emailAdd);
		}
    }
