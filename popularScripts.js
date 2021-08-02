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
		var popular_data="";
		var KC = 0;
		var KD = 0;
		var KP = 0;

		$.each(data, function(key,value){
			if(value.burger == "Krusty Combo"){
				KC++;
			}
			else if(value.burger == "Krusty Deluxe"){
				KD++;
			}
			else{
				KP++;
			}
		});

		popular_data +="<tr>";
		popular_data +="<td>"+KC+"</td>";
		popular_data +="<td>"+KD+"</td>";
		popular_data +="<td>"+KP+"</td>";
		popular_data +="</tr>";

		$("#popular_table").append(popular_data);
	});
});