function stringing() {
	
	var s = "hello, world";
	
	
	var strings = [["Char At",s.charAt(0)],
	               ["Char At last",s.charAt(s.length-1)],
	               ["Substring",s.substring(1,4)],
	               ["slice",s.slice(1,4)],
	               ["slice backwords",s.slice(-3)],
	               ["Index of",s.indexOf("l")],
	               ["last index of",s.lastIndexOf("l")],
	               ["index from",s.indexOf("l",3)],
	               ["split",s.split(", ")],
	               ["replace",s.replace("h","H")],
	               ["toUpperCase",s.toUpperCase()],
	               ];
	
	var body = document.getElementsByTagName('body')[0];
	body.style='margin:45px';
	
	var myDiv = document.createElement('div');
	myDiv.style = 'color:blue';
	var span = "";
	for(i=0;i<strings.length;i++){
		
		span = span + "<span id=date"+i+">"+strings[i][0]+"  :  "+strings[i][1]+"</span><br>";
	}
	myDiv.innerHTML = span;
	
	var button1 = document.getElementById("button1"); 
	body.insertBefore(myDiv, button1);
		
}

function patterns(){
	
	var text ="testing: 1, 2, 3";
	
	var pattern = /\d+/g;
	
	pattern.test(text);
	
	text.search(pattern);
	
	text.match(pattern);
	
	text.replace(pattern, "#");
	
	text.split(/\D+/);
	
}

function falsy(){
	
	var und = undefined;
	
	var nully = null;
	
	var zero = 0;
	
	var minusZero = -0;
	
	var naNny = NaN;
	
	var empty = "";
	
	var fallsie = false;
	
	if(!naNny){
		console.log("NaNNy")
	}
		
}

function typeConversions(){
	
	var x = 1;
	
	var plus = x + "";
	
	var num = +x;
	
	var bool = !!x;
	
	var plus1 = String(x);
	
	var num1 = Number(x);
	
	var bool1 = Boolean(x);
	
	var n = 17;
	
	var binary_string = n.toString(2);
	
	var octal_string = "0" + n.toString(8);
	
	var hex_string = "0x" + n.toString(16);
	
	
}

function numberConversions(){
	
	var n = 123456.789;
	var fixed0 = n.toFixed(0); // "123457"
	var fixed2 = n.toFixed(2); // "123456.79"
	var fixed5 = n.toFixed(5); // "123456.78900"
	var exp1 = n.toExponential(1); // "1.2e+5"
	var exp3 = n.toExponential(3); // "1.235e+5"
	var prec4 = n.toPrecision(4); // "1.235e+5"
	var prec7 = n.toPrecision(7); // "123456.8"
	var prec10 = n.toPrecision(10); // "123456.7890"
	
	parseInt("3 blind faces")
	
	parseFloat(" 3.14 meters")

}

function toStringAndValueOf(){
	
	var arr = [1,2,3].toString();
	
	var func = (function(x){ f(x);}).toString();
	
	var dte = new Date(2010,0,1).toString();
	
	var d = new Date(2010, 0, 1).valueOf();
}


