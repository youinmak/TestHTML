/**
 * 
 */

function increment(args){
		
		var incremented = new Number(args+1)
		
		return incremented;
	}

var decre = function decrement(args){
	
	var decremented = new Number(args-1)
	
	return decremented;
}

function changeValue() {
	var x=1.4, y=44;

	x = increment(x);
	
	y = decre(y);
	var textValue = "Hello  "+ x +" "+y
	var para = document.getElementById("paragraph")
	
	//alert(textValue)
	if(isFinite(x) && isNaN(x)){
		para.style.color="red";
	}
	textValue = textValue +"<div id='div1' style='background-color:white;color:blue'>"
	//if(prompt("Do you wan to display math operations?", "y/n")==="y"){
		textValue = mathOperations(textValue);
	//}
	textValue = textValue + dateOperations();
	textValue = textValue +"</div>"
	para.innerHTML=textValue
	stringing();
}

function mathOperations(args){

	var maths = [Math.pow(2,53),Math.round(0.6),Math.ceil(0.6),
	             Math.floor(0.6),Math.abs(-5),Math.max(1,2,3),
	             Math.min(1,2,3),Math.random(),Math.PI,Math.E,Math.sqrt(3),
	             Math.pow(3,1/3),Math.sin(0),Math.log(100),
	             Math.log(100)/Math.LN10,Math.log(512)/Math.LN2,Math.exp(3)];
		
	for(i=0;i<maths.length;i++){
		args = args+"<span id=math"+i+">"+maths[i]+"</span><br>";
	}
	
	return args;
}

function dateOperations(){
	
	var then = new Date(2016,0,1);
	
	var later = new Date(2016,0,1,17,10,30);
	
	var now = new Date();
	
	var elapsed = now - then;
	
	var fullYear = later.getFullYear();
	var month = later.getMonth();
	var date = later.getDate();
	var day = later.getDay();
	var hours = later.getHours();
	var utcHours = later.getUTCHours();
	var stringDate = later.toString();
	var utcStringDate = later.toUTCString();
	var localDate = later.toLocaleDateString();
	var localTime = later.toLocaleTimeString();
	var isoDate = later.toISOString();
	
	var dates = [["then",then],["later",later],["now",now],["elapsed",elapsed],
	             ["fullYear",fullYear],["month",month],["date",date],["day",day],
	             ["hours",hours],["utcHours",utcHours],["stringdate",stringDate],
	             ["UTC String date",utcStringDate],["local date",localDate],
	             ["Local Time",localTime],["ISO date",isoDate]];
	//alert(dates)
	var innerValue = "<div style='background-color:indigo;color:yellow'>";
	for(i=0;i<dates.length;i++){
		innerValue = innerValue + "<span id=date"+i+">"+dates[i][0]+"  :  "+dates[i][1]+"</span><br>";
	}
	return innerValue+"</div>";
}

