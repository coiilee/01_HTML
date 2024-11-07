const inputId = document.getElementById("inputId");
const inputPw = document.getElementById("inputPw");
const loginId = document.getElementById("loginId");
const loginPw = document.getElementById("loginPw");
const inputMp = document.getElementById("inputMp");
const inputTp = document.getElementById("inputTp");

function login() {
  const id = loginId.value;
  const pw = loginPw.value;

  "dlekrnd" == id && "dlekrnd" == pw
    ? alert("로그인 성공")
    : alert("로그인 실패");
}

function signUp() {
  const id = inputId.value;
  const pw = inputPw.value;
  const mp = inputMp.value;
  const tp = inputTp.value;

  (id && pw && mp) || tp ? alert(success) : alert("fail");
  mp.value || tp.value
    ? (msg.style.display = "none")
    : (msg.style.display = "block");
}
