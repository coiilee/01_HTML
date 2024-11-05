//1. 문서 내에 input1 input2 input3 calcResult 요소를 가져오는 const 설정

const number1 = document.getElementById("input1");
const number2 = document.getElementById("input2");
const number3 = document.getElementById("input3");
const result = document.getElementById("calcResult");

//각 number1 = input1   number2 = input2   number3 = input3
//value값 가지고 오기

const value1 = number1.value;
const value2 = number2.value;
const value3 = number3.value;

function 더하기기능() {
  result.innerText =
    Number(number1.value) + Number(number2.value) + Number(number3.value);
}

function 곱하기기능() {}
