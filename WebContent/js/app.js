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