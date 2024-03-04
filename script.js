var password = document.getElementById("password");
var length = 12;
var calpha = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var salpha = "abcdefghijklmnopqrstuvwxyz";
var number = "1234567890";
var symbol = "!@#$%^&*{[}|\?/+=_-]";
var allchar = calpha + salpha + number + symbol;
function generatepass(){
	let pass = "";

	 pass += calpha[Math.floor(Math.random() * calpha.length)];
	 pass += salpha[Math.floor(Math.random() * salpha.length)];
	 pass += number[Math.floor(Math.random() * number.length)];
	 pass += symbol[Math.floor(Math.random() * symbol.length)];
    while(length > pass.length)
	{
	pass += allchar[Math.floor(Math.random()* allchar.length)];
	}
	password.value = pass;
	msg.style.opacity = "0";
	msg.style.top = "65px";
}
function copypassword(){
	password.select();
	document.execCommand("copy");
	var msg = document.getElementById("msg");
	if(password.value === ''){
		msg.style.opacity = "0";
	}
	else{
		msg.style.opacity = "1";
		msg.style.top = "50px";
	}
	
	
}
