var MEMBER_API = "https://youtube-api-challenger2.appspot.com/members";
var btnSubmit = document.getElementById("btnSubmit");
if(btnSubmit != null){
	btnSubmit.onclick = function(){
		validateForm();
	}	
}

function validateForm(){
	// Lấy giá trị các phần tử trong form.
	// Validate username.
	var usernameInput = document.forms["member"].elements["username"];	
	var username = usernameInput.value;
	if (username.length == 0){
		usernameInput.nextElementSibling.innerHTML = "Vui lòng nhập thông tin tài khoản!";
	}else if (username.length < 7){
		usernameInput.nextElementSibling.innerHTML = "Thông tin tài khoản phải dài hơn 7 ký tự!";
	}else {
		usernameInput.nextElementSibling.innerHTML = "";
	}

	// Validate password.
	var passwordInput = document.forms["member"].elements["password"];
	var password = passwordInput.value;
	if (password.length == 0){
		passwordInput.nextElementSibling.innerHTML = "Vui lòng nhập thông tin mật khẩu!";
	}else if (password.length < 7){
		passwordInput.nextElementSibling.innerHTML = "Thông tin mật khẩu phải dài hơn 7 ký tự!";
	}else {
		passwordInput.nextElementSibling.innerHTML = "";
	}

	// Validate repassword.
	var rePasswordInput = document.forms["member"].elements["re-password"];
	var rePassword = rePasswordInput.value;
	if(rePassword !== password){
		rePasswordInput.nextElementSibling.innerHTML = "Mật khẩu không khớp!";
	}else{
		rePasswordInput.nextElementSibling.innerHTML = "";
	}

	// Validate fullName.
	var fullNameInput = document.forms["member"].elements["fullName"];
	var fullName = fullNameInput.value;
	if (fullName.length == 0){
		fullNameInput.nextElementSibling.innerHTML = "Vui lòng nhập họ và tên!";
	}else if (fullName.length < 7){
		fullNameInput.nextElementSibling.innerHTML = "Họ và tên phải dài hơn 7 ký tự!";
	}else {
		fullNameInput.nextElementSibling.innerHTML = "";
	}

	// Validate email.
	var emailInput = document.forms["member"].elements["email"];
	var email = emailInput.value;
	if (email.length == 0){
		emailInput.nextElementSibling.innerHTML = "Vui lòng email!";
	}else if (email.length < 7){
		emailInput.nextElementSibling.innerHTML = "Email phải dài hơn 7 ký tự!";
	}else {
		emailInput.nextElementSibling.innerHTML = "";
	}
	
	// var birthDay = document.forms["member"].elements["birthDay"].value;

	// // Kiểm tra trong danh sách mảng gender, phần tử nào được chọn thì 
	// // sẽ lấy giá trị của phần tử đấy.
	// var genders = document.forms["member"].elements["gender"];
	// var gender = 0;
	// for(var i = 0; i < genders.length; i++){
	// 	// Kiểm tra phần tử được check.
	// 	if(genders[i].checked){
	// 		// Lấy giá trị phần tử được check đưa vào biến gender.
	// 		gender = genders[i].value;
	// 	}
	// }

	var object = {
		"data": {
			"type": "Member",
			"attributes": {
				"username": username,
		        "password": password,
		        "fullName": fullName,
		        "email": email,
		        "birthDay":15066499900231,
		        "gender":1
			}
		}
	}

	// construct an HTTP request
	var xhr = new XMLHttpRequest(); // Đối tượng có sẵn.
	// Mở kết nối tới server với địa chỉ cho trước. Phương thức POST.
	xhr.open("POST", MEMBER_API, true);	// gửi lên đâu, kiểu gửi là gì.
	// Gửi dữ liệu theo định dạng json.
	xhr.send(JSON.stringify(object)); // gửi cái gì
	xhr.onreadystatechange = function() { // gửi xong rồi thì sao.
		// Gửi thành công rồi thì sao.
		if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 201) {
			// Hiển thị thông báo cho người dùng.
			document.getElementById("total-msg").classList = "success-msg";
			document.getElementById("total-msg").innerHTML = "Đăng ký thành công.";			
		} else {
			if(xhr.readyState === XMLHttpRequest.DONE){
				var responseObject = JSON.parse(xhr.responseText);
				document.getElementById("total-msg").classList = "error-msg";
				document.getElementById("total-msg").innerHTML = responseObject.errors[0].title + " " + responseObject.errors[0].detail;
			}			
		}	  
	};
}
