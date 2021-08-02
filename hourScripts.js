$(document).ready(function(){
	$("#overview").click(function(){
		$(location).attr("href","Overview.html");
	});

	$("#daily").click(function(){
		$(location).attr("href","dailyOverview.html");
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
				var hour_data="";
				var counter = 0;

				var KCC = 0;
				var KDC = 0;
				var KPC = 0;
				var KCGC = 0;
				var KDGC = 0;
				var KPGC = 0;
				var KCGW = 0;
				var KDGW = 0;
				var KPGW = 0;
				var KCLBT = 0;
				var KDLBT = 0;
				var KPLBT = 0;
				var KCS = 0;
				var KDS = 0;
				var KPS = 0;
				var KCSH = 0;
				var KDSH = 0;
				var KPSH = 0;
				var KCSL = 0;
				var KDSL = 0;
				var KPSL = 0;

				var KCT = 0;
				var KDT = 0;
				var KPT = 0;

				var CT = 0;
				var GCT = 0;
				var GWT = 0;
				var LBTT = 0;
				var ST = 0;
				var SHT = 0;
				var SLT = 0;

				$.each(data, function(key,value){
					if(fullday==0){
						var cut = value.datetime.split(":")[0];
					}
					else{
						var cut = value.datetime.split(" ")[0];
					}

					if (cut == datetime){
						if(value.species == "coral"){
							if(value.burger == "Krusty Combo"){
								KCC++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDC++;
								KDT++;
							}
							else{
								KPC++;
								KPT++;
							}
							CT++;
						}
						else if(value.species == "giant clam"){
							if(value.burger == "Krusty Combo"){
								KCGC++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDGC++;
								KDT++;
							}
							else{
								KPGC++;
								KPT++;
							}
							GCT++;
						}
						else if(value.species == "gray whale"){
							if(value.burger == "Krusty Combo"){
								KCGW++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDGW++;
								KDT++;
							}
							else{
								KPGW++;
								KPT++;
							}
							GWT++;
						}
						else if(value.species == "leatherback turtle"){
							if(value.burger == "Krusty Combo"){
								KCLBT++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDLBT++;
								KDT++;
							}
							else{
								KPLBT++;
								KPT++;
							}
							LBTT++;
						}
						else if(value.species == "salmon"){
							if(value.burger == "Krusty Combo"){
								KCS++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDS++;
								KDT++;
							}
							else{
								KPS++;
								KPT++;
							}
							ST++;
						}
						else if(value.species == "seahorse"){
							if(value.burger == "Krusty Combo"){
								KCSH++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDSH++;
								KDT++;
							}
							else{
								KPSH++;
								KPT++;
							}
							SHT++;
						}
						else{
							if(value.burger == "Krusty Combo"){
								KCSL++;
								KCT++;
							}
							else if(value.burger == "Krusty Deluxe"){
								KDSL++;
								KDT++;
							}
							else{
								KPSL++;
								KPT++;
							}
							SLT++;
						}
						counter++;
					}
				});
			
				hour_data +="<table>";

				if(fullday==0){
					hour_data +="<caption>"+datetime+":00:00"+" Sales"+"</caption>";
				}
				else{
					hour_data +="<caption>"+datetime+" Sales"+"</caption>";
				}

				hour_data +="<tr>";
				hour_data +="<th>"+"</th>";
				hour_data +="<th>"+"Coral"+"</th>";
				hour_data +="<th>"+"Giant Clam"+"</th>";
				hour_data +="<th>"+"Gray Whale"+"</th>";
				hour_data +="<th>"+"Leatherback Turtle"+"</th>";
				hour_data +="<th>"+"Salmon"+"</th>";
				hour_data +="<th>"+"Seahorse"+"</th>";
				hour_data +="<th>"+"Sea Lion"+"</th>";
				hour_data +="<th>"+"Total"+"</th>";
				hour_data +="</tr>";
	
				hour_data +="<tr>";
				hour_data +="<th>"+"Krusty Combo"+"</th>";
				hour_data +="<td>"+KCC+"</td>";
				hour_data +="<td>"+KCGC+"</td>";
				hour_data +="<td>"+KCGW+"</td>";
				hour_data +="<td>"+KCLBT+"</td>";
				hour_data +="<td>"+KCS+"</td>";
				hour_data +="<td>"+KCSH+"</td>";
				hour_data +="<td>"+KCSL+"</td>";
				hour_data +="<td>"+KCT+"</td>";
				hour_data +="</tr>";

				hour_data +="<tr>";
				hour_data +="<th>"+"Krusty Deluxe"+"</th>";
				hour_data +="<td>"+KDC+"</td>";
				hour_data +="<td>"+KDGC+"</td>";
				hour_data +="<td>"+KDGW+"</td>";
				hour_data +="<td>"+KDLBT+"</td>";
				hour_data +="<td>"+KDS+"</td>";
				hour_data +="<td>"+KDSH+"</td>";
				hour_data +="<td>"+KDSL+"</td>";
				hour_data +="<td>"+KDT+"</td>";
				hour_data +="</tr>";

				hour_data +="<tr>";
				hour_data +="<th>"+"Krabby Pattie"+"</th>";
				hour_data +="<td>"+KPC+"</td>";
				hour_data +="<td>"+KPGC+"</td>";
				hour_data +="<td>"+KPGW+"</td>";
				hour_data +="<td>"+KPLBT+"</td>";
				hour_data +="<td>"+KPS+"</td>";
				hour_data +="<td>"+KPSH+"</td>";
				hour_data +="<td>"+KPSL+"</td>";
				hour_data +="<td>"+KPT+"</td>";
				hour_data +="</tr>";

				hour_data +="<tr>";
				hour_data +="<th>"+"Total"+"</th>";
				hour_data +="<td>"+CT+"</td>";
				hour_data +="<td>"+GCT+"</td>";
				hour_data +="<td>"+GWT+"</td>";
				hour_data +="<td>"+LBTT+"</td>";
				hour_data +="<td>"+ST+"</td>";
				hour_data +="<td>"+SHT+"</td>";
				hour_data +="<td>"+SLT+"</td>";
				hour_data +="<th>"+counter+"</th>";
				hour_data +="</tr>";

				hour_data +="</table>";

				$("#hour_table").append(hour_data);
			});
		}
	});
});