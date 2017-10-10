var isusername = false;var isemail=false; var ispassword=false; var isconfirmPassword=false; var isfullName=false;
var usernameElement = document.getElementById("username");
usernameElement.onkeyup = function(){
	username();
}
var emailElement = document.getElementById("email");
emailElement.onkeyup = function(){
	email();
}
var passElement = document.getElementById("password");
passElement.onkeyup = function(){
	pass();
}
var repassElement = document.getElementById("confirmPassword");
repassElement.onkeyup = function(){
	repass();
};	
function pass(){
	var pass=passElement.value;
	var passMessage = document.getElementById("password-msg");
	if (pass.length<7) {
		passMessage.innerHTML="Bạn nhập quá ngắn";
		passMessage.style.color="red";
	}else if(pass.length>15){
		passMessage.innerHTML="Bạn nhập quá dài"
		passMessage.style.color="red";
		}else{
		passMessage.innerHTML="Chuỗi nhập hợp lệ";
		passMessage.style.color="green";
		ispassword=true;
	}
};
function email(){
	var email=emailElement.value;
	var emailMessage = document.getElementById("email-msg");
	if (email.length<7) {
		emailMessage.innerHTML="Bạn nhập quá ngắn";
		emailMessage.style.color="red";
	}else if(email.length>15){
		emailMessage.innerHTML="Bạn nhập quá dài"
		emailMessage.style.color="red";
		}else{
		emailMessage.innerHTML="Chuỗi nhập hợp lệ";
		emailMessage.style.color="green";
		isemail=true;
	}
}
function username() {
	var username = usernameElement.value;
	var usermessage = document.getElementById("username-msg");
	if (username.length<7) {
		usermessage.innerHTML="Bạn nhập quá ngắn";
		usermessage.style.color="red";
	}else if(username.length>15){
		usermessage.innerHTML="Bạn nhập quá dài"
		usermessage.style.color="red";
		}else{
		usermessage.innerHTML="Chuỗi nhập hợp lệ";
		usermessage.style.color="green";
		isusername=true;
	}
}
function repass() {
	var repass=repassElement.value;
	var repassMessage = document.getElementById("confirmPassword-msg");
	if (repass.length<7) {
		repassMessage.innerHTML="Bạn nhập quá ngắn";
		repassMessage.style.color="red";
	}else if(repass.length>15){
		repassMessage.innerHTML="Bạn nhập quá dài"
		repassMessage.style.color="red";
	}else if(repass==document.getElementById("password").value){
		repassMessage.innerHTML="Mật khẩu khớp";
		repassMessage.style.color="green";
		isconfirmPassword=true;
	}else{
		repassMessage.innerHTML="Mật khẩu không trùng khớp";
		repassMessage.style.color="red";	
	}
}
var fullnameElement = document.getElementById("fullName");
fullnameElement.onkeyup=function(){
	fullname();
}
function fullname() {
	var fullname = fullnameElement.value;
	var fullnameMessage = document.getElementById("fullName-msg");
	if (fullname.length<20) {
		fullnameMessage.innerHTML = "Bạn nhập quá ngắn";
		fullnameMessage.style.color = "red";
	}else{
		fullnameMessage.innerHTML = "Chuỗi hợp lệ";
		fullnameMessage.style.color = "green";
		isfullName=true;
	}
}
function isValid(){
	if (isusername==false || isemail==false || ispassword==false || isconfirmPassword==false || isfullName==false) {
		return false;
	}else{
		return true;
	}
}	x