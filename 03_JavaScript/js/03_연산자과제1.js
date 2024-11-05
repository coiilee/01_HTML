/*
기능 기능명 () {
const n1 = "";
const n2 = "";
const result = "";

const comp = (n1>n2) ? "첫번째숫자가 더 큽니다." : "두번째숫자가 더 크거나 같습니다."
const add= n1+n2;
const mul= n1*n2;
const sub= n1-n2;
계산결과 result.innerText로 보여주기 
}
*/

function calc() {
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const result = document.getElementById("res");

  const add = Number(n1.value) + Number(n2.value);
  const mul = n1.value * n2.value;
  const sub = n1.value - n2.value;
  const comp =
    n1.value > n2.value
      ? "첫번째숫자가 더 큽니다."
      : "두번째숫자가 더 크거나 같습니다.";

  result.innerText =
    comp +
    "\n" +
    "더하기 결과 : " +
    add +
    "\n" +
    "곱하기 결과 : " +
    mul +
    "\n" +
    "빼기 결과 : " +
    sub;
}
