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
		var burgerBySpecies_data="";
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

		var C = 0;
		var GC = 0;
		var GW = 0;
		var LBT = 0;
		var S = 0;
		var SH = 0;
		var SL = 0;

		$.each(data, function(key,value){
			if(value.species == "coral"){
				if(value.burger == "Krusty Combo"){
					KCC++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDC++;
				}
				else{
					KPC++;
				}
				C++;
			}
			else if(value.species == "giant clam"){
				if(value.burger == "Krusty Combo"){
					KCGC++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDGC++;
				}
				else{
					KPGC++;
				}
				GC++;
			}
			else if(value.species == "gray whale"){
				if(value.burger == "Krusty Combo"){
					KCGW++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDGW++;
				}
				else{
					KPGW++;
				}
				GW++;
			}
			else if(value.species == "leatherback turtle"){
				if(value.burger == "Krusty Combo"){
					KCLBT++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDLBT++;
				}
				else{
					KPLBT++;
				}
				LBT++;
			}
			else if(value.species == "salmon"){
				if(value.burger == "Krusty Combo"){
					KCS++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDS++;
				}
				else{
					KPS++;
				}
				S++;
			}
			else if(value.species == "seahorse"){
				if(value.burger == "Krusty Combo"){
					KCSH++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDSH++;
				}
				else{
					KPSH++;
				}
				SH++;
			}
			else{
				if(value.burger == "Krusty Combo"){
					KCSL++;
				}
				else if(value.burger == "Krusty Deluxe"){
					KDSL++;
				}
				else{
					KPSL++;
				}
				SL++;
			}
		});

		burgerBySpecies_data +="<tr>";
		burgerBySpecies_data +="<th>"+"Krusty Combo"+"</th>";
		burgerBySpecies_data +="<td>"+KCC+"</td>";
		burgerBySpecies_data +="<td>"+KCGC+"</td>";
		burgerBySpecies_data +="<td>"+KCGW+"</td>";
		burgerBySpecies_data +="<td>"+KCLBT+"</td>";
		burgerBySpecies_data +="<td>"+KCS+"</td>";
		burgerBySpecies_data +="<td>"+KCSH+"</td>";
		burgerBySpecies_data +="<td>"+KCSL+"</td>";
		burgerBySpecies_data +="</tr>";

		burgerBySpecies_data +="<tr>";
		burgerBySpecies_data +="<th>"+"Krusty Deluxe"+"</th>";
		burgerBySpecies_data +="<td>"+KDC+"</td>";
		burgerBySpecies_data +="<td>"+KDGC+"</td>";
		burgerBySpecies_data +="<td>"+KDGW+"</td>";
		burgerBySpecies_data +="<td>"+KDLBT+"</td>";
		burgerBySpecies_data +="<td>"+KDS+"</td>";
		burgerBySpecies_data +="<td>"+KDSH+"</td>";
		burgerBySpecies_data +="<td>"+KDSL+"</td>";
		burgerBySpecies_data +="</tr>";

		burgerBySpecies_data +="<tr>";
		burgerBySpecies_data +="<th>"+"Krabby Pattie"+"</th>";
		burgerBySpecies_data +="<td>"+KPC+"</td>";
		burgerBySpecies_data +="<td>"+KPGC+"</td>";
		burgerBySpecies_data +="<td>"+KPGW+"</td>";
		burgerBySpecies_data +="<td>"+KPLBT+"</td>";
		burgerBySpecies_data +="<td>"+KPS+"</td>";
		burgerBySpecies_data +="<td>"+KPSH+"</td>";
		burgerBySpecies_data +="<td>"+KPSL+"</td>";
		burgerBySpecies_data +="</tr>";

		burgerBySpecies_data +="<tr>";
		burgerBySpecies_data +="<th>"+"Total"+"</th>";
		burgerBySpecies_data +="<th>"+C+"</th>";
		burgerBySpecies_data +="<th>"+GC+"</th>";
		burgerBySpecies_data +="<th>"+GW+"</th>";
		burgerBySpecies_data +="<th>"+LBT+"</th>";
		burgerBySpecies_data +="<th>"+S+"</th>";
		burgerBySpecies_data +="<th>"+SH+"</th>";
		burgerBySpecies_data +="<th>"+SL+"</th>";
		burgerBySpecies_data +="</tr>";

		$("#burgerBySpecies_table").append(burgerBySpecies_data);
	});
});