$(document).ready(function(){
	
	//Generating PDF using JSPDF.JS
	var doc = new jsPDF();
	var specialElementHandlers = {
		'#editor': function (element, renderer) {
			return true;
		}
	};

	$('#pdf_generator').click(function () {
		doc.fromHTML($('#content').html(), 15, 15, {
			'width': 170,
				'elementHandlers': specialElementHandlers
		});
		doc.save('sample-file.pdf');
	});

	//Showing Respective input fields on the left div
	$(".mid-div button").click(function(){
		$('.left-div').find('.details-form').hide();
		$('.left-div').find('.'+$(this).attr('id')).show();
	});
 
	//Writing data to right div w.r.t left div
	$(".typeClick").keyup(function(){
		if($(this).val()==""){
			$('.right-div').find('.'+$(this).attr('id')).parent().hide();
		}
		else{
			$('.right-div').find('.'+$(this).attr('id')).parent().show();
			$('.right-div').find('.'+$(this).attr('id')).html($(this).val());
		}
	});
	
	//Adding buttons for Bold/Italic/Font-size dynamically to all input fields on left div
	$(".details-form ._input").append('<button type="button" class="_bold">B</button><button type="button" class="_italic">I</button><button type="button" class="_font">A+</button><button type="button" class="__font">A-</button>');
	
	//Functionality for Bold/Italic/Font-size
	$("._bold").click(function(){
		$('.right-div').find('.'+$(this).parent().find('input').attr('id')).parent().toggleClass('bold');
	});

	$("._italic").click(function(){
		$('.right-div').find('.'+$(this).parent().find('input').attr('id')).parent().toggleClass('italic');
	});
	
	$("._font").click(function(){	
		var fontSize=parseInt($('.right-div').find('.'+$(this).parent().find('input').attr('id')).parent().css('font-size'));
		fontSize++;
		$('.right-div').find('.'+$(this).parent().find('input').attr('id')).parent().css('font-size',fontSize+'px');
	});

	$(".__font").click(function(){	
		var fontSize=parseInt($('.right-div').find('.'+$(this).parent().find('input').attr('id')).parent().css('font-size'));
		fontSize--;
		$('.right-div').find('.'+$(this).parent().find('input').attr('id')).parent().css('font-size',fontSize+'px');
	});
	
})

/*$(document).ready(function(){
function personalDetails(){
	$('.left-div').html($('.personal-details'));
}

function academicDetails(){
}
	$('.left-div').html($('.academic-details'));

function keyPress(){
	console.log($(this).html());
}

//})

/*function keyPress()
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
*/