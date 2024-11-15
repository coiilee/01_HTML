function agree() {
  const agree1Checked = document.getElementById("agree1").checked;
  const agree2Checked = document.getElementById("agree2").checked;
  const agree3Checked = document.getElementById("agree3").checked;
  const checked = agree1Checked && agree2Checked && agree3Checked;

  if (checked) {
    window.location.href = "241115_회원가입.html";
  } else {
    alert("필수 약관에 동의해야합니다.");
  }
}

//1. 가입버튼 가입완료 alert이후 성공.html로 이동하기
//2. addEventListener로 변경해서 작성

function 가입하기() {
  const userId = document.getElementById("user-id").value;
  const userPw = document.getElementById("user-pw");
  const userEmail = document.getElementById("user-email").value;

  const idPattern = /^[a-zA-z0-9]{5,12}$/;
  const pwPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  /*
            (?=.*[A-Za-z])= 대소문자 영어가 있는지 탐색
            (?=.*\d) = (?=.*[0-9]) = 숫자가 포함되어 있는가 
            [A-Za-z\d]
            */
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!idPattern.test(userId)) {
    alert("아이디는 5~12자의 영문자 및 숫자여야 합니다.");
    return false;
  }
  if (!pwPattern.test(userPw)) {
    alert("비밀번호는 영문 대/소문자,특수문자 포함입니다.");
    return false;
  }
  if (!emailPattern.test(userEmail)) {
    alert("잘못된 이메일 주소입니다.");
    return false;
  }
}
