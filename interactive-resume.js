function personalDetails(){
	$('.left-div').html($('.personal-details'));
}

function academicDetails(){
	$('.left-div').html($('.academic-details'));
}


function keyPress()
    {
        if(($("#fname").val().length + $("#lname").val().length)>0){
        var fullName = "My name is " + $("#fname").val() + " " + $("#lname").val();
		$("#rname").text(fullName);
		}
		else{
		$("#rname").text("");
		}

		if($("#contact").val().length>0){
		var contactNum = "I am reachable at " + $("#contact").val();
		$("#rcontact").text(contactNum);
		}
		else{
		$("#rcontact").text("");
		}

		if($("#email").val().length>0){
		var emailAdd = "Also you can send a mail to " + $("#email").val();
		$("#remail").text(emailAdd);
		}
		else{
		$("#remail").text("");
		}
		
		if($("#10th").val().length>0){
		var details10 = "Also you can send a mail to " + $("#10th").val();
		$("#r10th").text(details10);
		}
		else{
		$("#r10th").text("");
		}
		
		if($("#12th").val().length>0){
		var details12 = "Also you can send a mail to " + $("#12th").val();
		$("#r12th").text(details12);
		}
		else{
		$("#r12th").text("");
		}
		
		if($("#btech").val().length>0){
		var detailsbtech = "Also you can send a mail to " + $("#btech").val();
		$("#rbtech").text(detailsbtech);
		}
		else{
		$("#rbtech").text("");
		}
    }
