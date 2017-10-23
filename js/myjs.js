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

var AUTHENTICATION_URL = "https://youtube-api-challenger2.appspot.com/members";
var btnregister = document.getElementById("register");
btnregister.onclick = function(){
	alert(1);
	var user = document.forms["my-form"].elements["userName"].value;
	var pass = document.forms["my-form"].elements["passWord"].value;
	var name = document.forms["my-form"].elements["fullName"].value;
	var mail = document.forms["my-form"].elements["email"].value;
	var birth = document.forms["my-form"].elements["birthDay"].value;
	var gen = document.getElementById("gender");
	var data = {
		"data":{ 
		    "type":"Member",
		    "attributes":{ 
		        "username": user,
		        "password": pass,
		        "fullName":name,
		        "email":mail,
		        "birthDay":birth,
		        "gender":gen.selectedIndex
		      }
		    }
	};
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function(){
	if (this.readyState == 4 && this.status == 200) {
		document.body.innerHTML = this.responseText;
	}
};
	xhttp.open("POST",AUTHENTICATION_URL,true);
	xhttp.send(JSON.stringify(data));
}



// //Lấy giá trị của gender
// var genderSelect;
// var genderValue;
// function genderChange() {
// 	genderSelect=gender.selectedIndex;
// 	genderValue = gender.option[genderSelect].value;
// }


// agree.addEventListener("click", function(){alert(genderValue)
// 	// if (genderSelect = "2") {
// 	// 	genderMsg.innerHTML = "Bạn chưa chọn giới tính"
// 	// 	genderMsg.style = "color : red"
// 	// }else{
// 	// 	genderMsg.innerHTML = "OK"
// 	// 	genderMsg.style = "color : green"
// 	// }
// }) 
// agree.addEventListener("click", function(){
// 	if (email.value.length == 0) {
// 		emailMsg.innerHTML = "Bạn chưa nhập Email"
// 		emailMsg.style = "color: red"
// 	}
// })
