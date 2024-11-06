function checkPw() {
  const pw = document.getElementById("inputPW").value;
  const pwConfirm = document.getElementById("inputPwConfirm").value;

  const success = "일치합니다.";
  const fail = "일치하지 않습니다.";

  pw == "pass1234!" && pwConfirm == "pass1234!" ? alert(success) : alert(fail);
}
