// 로그인 js



var logBtn = document.querySelector('#logCheck');
logBtn.onclick = function() {
	var idCheck = document.getElementById("idCheck");
	var pwCheck = document.getElementById("pwCheck");

	if (idCheck.value == "") {
		alert("아이디를 입력하세요.");
		idCheck.focus();
		return false;
	}
	if (pwCheck.value == "") {
		alert("비밀번호를 입력하세요.");
		pwCheck.focus();
		return false;
	} else {
		alert("로그인되었습니다.");
		return true;

	}

}

// querySelector : 구체적인 그룹과 일치하는 document 내 엘리먼트를 반환한다. 
// getElementById : id를 통해 엘리먼트를 반환한다. 
// 차이는 다음과 같다. 디테일이 다르다. 
// var username = document.getElementById("username");
// var username = document.querySelector("#userForm #username");

var btn = document.querySelector('#confirm');
btn.onclick = function() {
	var uid = document.getElementById("uid");
	var pwd = document.getElementById("pwd");
	var repwd = document.getElementById("repwd");
	var mobile = document.getElementById("mobile");
	var email = document.getElementById("email");
	var agree = document.getElementById("agree");

	if (uid.value == "") {
		alert("아이디를 입력하세요.");
		uid.focus();
		return false;
	}
	if (pwd.value == "") {
		alert("비밀번호를 입력하세요.");
		pwd.focus();
		return false;
	}

	var pwdCheck = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/;

	if (!pwdCheck.test(pwd.value)) { // 비밀번호 유효성 검사
		alert("비밀번호는 영문자+숫자+특수문자 조합으로 8~25자리 사용해야합니다.");
		pwd.focus();
		return false;
	}
	;
	if (repwd.value !== pwd.value) { // 비밀번호 재확인 검사
		alert("비밀번호가 일치하지 않습니다.");
		repwd.focus();
		return false;
	}
	;

	if (mobile.value == "") {
		alert("전화번호를 입력하세요.");
		mobile.focus();
		return false;
	}

	var phoneCheck = /(010)-\d{4}-\d{4}/;

	if (!phoneCheck.test(mobile.value)) { // 폰번호 검사
		alert("비밀번호가 형식에 맞춰 재입력바랍니다.");
		mobile.focus();
		return false;
	}

	if (email.value == "") {
		alert("이메일을 입력하세요.");
		email.focus();
		return false;
	}
	;
	if (!agree.checked) {
		alert("약관 동의를 체크하세요.");
		agree.focus();
		return false;
	} else {
		alert("회원가입이 완료되었습니다.");
		return true;
	}

}