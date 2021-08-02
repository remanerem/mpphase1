$(document).ready(function(){
	$("#overview").click(function(){
		$(location).attr("href","Overview.html");
	});

	$("#daily").click(function(){
		$(location).attr("href","dailyOverview.html");
	});

	$("#hour").click(function(){
		$(location).attr("href","Hour.html");
	});

	$("#popular").click(function(){
		$(location).attr("href","Popular.html");
	});

	$("#consumer").click(function(){
		$(location).attr("href","Consumer.html");
	});

	$("#logout").click(function(){
		$(location).attr("href","index.html");
	});

	$(".hover").hover(function(e){
		var hovertext=$(this).attr("hinttext");
		$("#hintbox").text(hovertext).show();
		$("#hintbox").css("top",e.clientY+15).css("left",e.clientX+15);
	}, function(){
		$("#hintbox").hide();
	});

});