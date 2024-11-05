//버튼 클릭 시 body 태그 안에 있는 글자색과 배경색 변경
/*
CSS에서는 자바스크립트 기능을 작성할 수 없지만
자바스크립트에서는 CSS기능을 작성할 수 있음 (사용 권장X) 
*/

const 바디 = document.getElementById("cssStyle");

//darkMode() 버튼을 클릭하면 darkMode() 기능이 실행
function darkMode() {
  바디.style.color = "white"; //글자색을 흰색으로 변경
  바디.style.backgroundColor = "black"; //배경색 검정색 변경
}

//lightMode() 버튼을 클릭하면 lightMode() 기능이 실행
function lightMode() {
  바디.style.color = "black"; //글자색을 흰색으로 변경
  바디.style.backgroundColor = "white"; //배경색 흰색으로 변경
}
