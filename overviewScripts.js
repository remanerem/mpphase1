$(document).ready(function(){
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

	$.getJSON("http://localhost:3000/sales", function(data){
		var overview_data="";
		$.each(data, function(key,value){
			overview_data += "<tr>";
			overview_data += "<td>"+value.datetime+"</td>";
			overview_data += "<td>"+value.burger+"</td>";
			overview_data += "<td>"+value.species+"</td>";
			overview_data += "</tr>";
		});
		$("#overview_table").append(overview_data);
	});
});