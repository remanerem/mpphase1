$(document).ready(function(){
	$("#overview").click(function(){
		$(location).attr("href","Overview.html");
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

	$("#year, #month, #day, #time").keyup(function(event) {
    		if (event.keyCode === 13) {
        		$("#submit").click();
    		}
	});

	$("#submit").click(function(){
		var year = $("#year").val();
		var month = $("#month").val();
		var day = $("#day").val();
		var time = $("#time").val();

		var fullday = 0;

		yearFlag=0;
		monthFlag=0;
		dayFlag=0;
		timeFlag=0;

		if(year.length==4){
			$("#yearerror").text("");
			$("#year").css("background-color","white");
			yearFlag=1;
		}
		else{
			$("#yearerror").text("Enter a valid year");
			$("#year").css("background-color","#FF00FF");
			yearFlag=0;
		}

		if(month>0 && month<13){
			$("#montherror").text("");
			$("#month").css("background-color","white");
			monthFlag=1;
		}
		else{
			$("#montherror").text("Enter a valid month(1-12)");
			$("#month").css("background-color","#FF00FF");
			monthFlag=0;
		}

		if(day>0 && day<32){
			$("#dayerror").text("");
			$("#day").css("background-color","white");
			dayFlag=1;
		}
		else{
			$("#dayerror").text("Enter a valid day(1-31)");
			$("#day").css("background-color","#FF00FF");
			dayFlag=0;
		}

		if(time>-1 && time<24){
			$("#timeerror").text("");
			$("#time").css("background-color","white");
			timeFlag=1;
		}
		else{
			$("#timeerror").text("Enter a valid time(0-23)");
			$("#time").css("background-color","#FF00FF");
			timeFlag=0;
		}

		if(yearFlag==1&&monthFlag==1&&dayFlag==1&&timeFlag==1){
			if(month.length<2){
				month = "0"+month;
			}

			if(day.length<2){
				day = "0"+day;
			}

			if(time.length == 1){
				time = "0"+time;
			}
		
			if(time.length<1){
				var datetime = year+"-"+month+"-"+day;
				fullday = 1;
			}
			else{
				var datetime = year+"-"+month+"-"+day+" "+time;
				fullday = 0;
			}

			$.getJSON("http://localhost:3000/sales", function(data){
				var dailyOverview_data="";

				dailyOverview_data +="<table>";
				dailyOverview_data +="<tr>";
				dailyOverview_data +="<th>"+"DateTime"+"</th>";
				dailyOverview_data +="<th>"+"Burger"+"</th>"
				dailyOverview_data +="<th>"+"Species"+"</th>"

				if(fullday==0){
					dailyOverview_data +="<caption>"+datetime+":00:00"+" Sales Overview"+"</caption>";
				}
				else{
					dailyOverview_data +="<caption>"+datetime+" Sales Overview"+"</caption>";
				}

				$.each(data, function(key,value){
					if(fullday==0){
						var cut = value.datetime.split(":")[0];
					}
					else{
						var cut = value.datetime.split(" ")[0];
					}

					if (cut == datetime){
						dailyOverview_data += "<tr>";
						dailyOverview_data += "<td>"+value.datetime+"</td>";
						dailyOverview_data += "<td>"+value.burger+"</td>";
						dailyOverview_data += "<td>"+value.species+"</td>";
						dailyOverview_data += "</tr>";
					}
				});

				dailyOverview_data +="</table>";

				$("#dailyOverview_table").append(dailyOverview_data);
			});
		}
	});
});