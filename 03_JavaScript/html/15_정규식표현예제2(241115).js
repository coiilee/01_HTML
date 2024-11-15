function checkEmail() {
  const userEmail = document.getElementById("user-email").value;
  const errorMsg = document.getElementById("error-msg");
  /* /^ = 정규식 시작 표기
       [a-zA-Z0-9.-_] =@(at)이 작성되기 전에 영어소문자 대문자 숫자 특수문자(,-_)포함해서 작성 가능
       +@             =+@ 앞에 작성한 아이디 표기 뒤에 무조건 @(at)가 뒤에 작성되어야함
       [a-zA-Z0-9.-가-힇]  =@(at) 뒤에 회사명과 같은 도메인명이 작성되어야함
       +\.            =회사명(도메인명)이 작성된 후 무조건 뒤에 .(dot,period)이 붙여져야함
       [a-zA-Z]       = . 뒤에 kr이나 com 이나 한국 과 같은 도메인명이 올 수 있도록 설정
       {2,}           = 위 규칙을 모두 지키는 기준으로 최소 2자 작성
       $/
       */
  const emailPattern = /^ [a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailPattern.test(userEmail)) {
    errorMsg.style.display = "none";
    console.log("유효한 이메일 형식입니다.");
  } else {
    errorMsg.style.display = "block";
  }
}

function checkPhone() {
  const userPhone = document.getElementById("user-phone");
  const errorMsg = document.getElementById("err-msg");
  const phonePattern = /^[0-9]{3,}+\-[0-9]+\-[0-9]{3,4}$/;
  //const phonePattern = /^010-\d{4}+\-\d{4}$/;

  if (phonePattern.test(userPhone)) {
    errorMsg.style.display = "none";
    console.log("유효한 번호입니다.");
  } else {
    errorMsg.style.display = "block";
  }
}
