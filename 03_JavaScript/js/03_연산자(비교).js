/*두 수가 같은지 비교 */

const v1 = document.getElementById("number1");
const v2 = document.getElementById("number2");
const r1 = document.getElementById("result1");

/*
자바 스크립트의 꽃 삼항연산자 
(  두개의 값 비교  ) ?  "비교 결과값이 true일때 나타날 멘트"  : "비교 결과값이 false일때 나타날 멘트" ;
*/

function 비교하기1() {
  r1.innerText = v1.value == v2.value ? "같습니다." : "같지 않습니다.";
  r1.style.color = v1.value == v2.value ? "orange" : "red";
  r1.style.backgroundColor = v1.value == v2.value ? "black" : "white";
}

//input3 input4 result2 담을 변수명 설정
const in3 = document.getElementById("input3");
const in4 = document.getElementById("input4");
const r2 = document.getElementById("result2");

//기능 비교하기2 () {
//r2.안에 텍스트로 = (in3값 > in4.값)}

function 비교하기2() {
  r2.innerText =
    in3.value > in4.value
      ? "좌측숫자값이 더 큽니다."
      : "우측 숫자값이 더 크거나 두 숫자의 값이 같습니다.";
  r2.style.color = in3.value > in4.value ? "yellowgreen" : "lightblue";
}
