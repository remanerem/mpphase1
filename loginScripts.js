$(document).ready(function(){
	$("#password, #username").keyup(function(event) {
    		if (event.keyCode === 13) {
        		$("#login").click();
    		}
	});

	$("#login").click(function(){
		$.fn.validateForm();
	});

	$.fn.validateForm = function(){
		var user=$("#username").val();
		var pass=$("#password").val();

		var a = 0;
		var b = 0;

		if(user=="admin"){
			$("#usererror").text("");
			$("#usererror").css("font-size", "20px");
			$(".fillInForms").css("height","300px");
			a = 1;
		}
		else{
			$("#usererror").text("The username you entered is not authorized to access this site");
			$("#usererror").css("font-size", "12px");
			$(".fillInForms").css("height","325px");
			a = 0;
		}

		if(pass=="p@ssword" && a==1){
			$("#passerror").text("");
			b = 1;
		}
		else{
			$("#passerror").text("Your password is incorrect");
			$("#passerror").css("font-size", "12px");
			b = 0;
		}

		if(a==1 && b==1){
			alert("Greetings, Admin");
			$(location).attr("href","Dashboard.html");	
		}
	}
});