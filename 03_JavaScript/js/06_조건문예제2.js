function checkScore() {
  const score = document.getElementById("score").value;
  const msg = document.getElementById("scoreMsg");

  if (score >= 60) {
    msg.innerText = "합격입니다";
    msg.className = "success"; //css파일명이나 style 태그에 속성설정한 스타일이 존재하지 않으면 적용x
  } else {
    //만약 59점 이하일 경우 합격 글자와 스타일 적용
    msg.innerText = "불합격입니다";
    msg.className = "fail";
  }
}
