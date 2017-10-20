
var userName = document.forms["my-form"].elements["userName"];
var passWord = document.forms["my-form"].elements["passWord"];
var repassWord = document.forms["my-form"].elements["repassWord"];
var email = document.forms["my-form"].elements["email"];
var gender = document.getElementById("gender");
var agree = document.forms["my-form"].elements["agree"];
var userNameMsg = document.getElementById("userName-msg");
var passWordMsg = document.getElementById("passWord-msg");
var repassWordMsg = document.getElementById("repassWord-msg");
var genderMsg = document.getElementById("gender-msg");
var emailMsg = document.getElementById("email-msg")
userName.onkeyup = function (){
	if (userName.value.length<7) {
		userNameMsg.innerHTML = "Bạn nhập quá ngắn";
		userNameMsg.style = "color: red";
	}else if(userName.value.length > 15){
		userNameMsg.innerHTML = "Bạn nhập quá dài"
		userNameMsg.style = "color: red";
	}else{
		userNameMsg.innerHTML = "OK";
		userNameMsg.style = "color: green";
	}
};
passWord.onkeyup = function (){
	if (passWord.value.length<7) {
		passWordMsg.innerHTML = "Bạn nhập quá ngắn";
		passWordMsg.style = "color: red";
	}else if(passWord.value.length > 15){
		passWordMsg.innerHTML = "Bạn nhập quá dài"
		passWordMsg.style = "color: red";
	}else{
		passWordMsg.innerHTML = "OK";
		passWordMsg.style = "color: green";
	}
};
repassWord.onkeyup = function (){
	if (repassWord.value == passWord.value) {
		repassWordMsg.innerHTML = "Mật khẩu trùng khớp";
		repassWordMsg.style = "color: green";
	}else{
		repassWordMsg.innerHTML = "Mật khẩu không trùng khớp";
		repassWordMsg.style = "color: red";
	}
}


//Lấy giá trị của gender
var genderSelect;
var genderValue;
function genderChange() {
	genderSelect=gender.selectedIndex;
	genderValue = gender.option[genderSelect].value;
}


agree.addEventListener("click", function(){alert(genderValue)
	// if (genderSelect = "2") {
	// 	genderMsg.innerHTML = "Bạn chưa chọn giới tính"
	// 	genderMsg.style = "color : red"
	// }else{
	// 	genderMsg.innerHTML = "OK"
	// 	genderMsg.style = "color : green"
	// }
}) 
agree.addEventListener("click", function(){
	if (email.value.length == 0) {
		emailMsg.innerHTML = "Bạn chưa nhập Email"
		emailMsg.style = "color: red"
	}
})