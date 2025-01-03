// input에 작성한 값은 value라는 속성으로 작성된 값 가져오기를 할수 있고
//자바스크립트에서 가져오기 기능을 value라는 이름으로 작성한 것

//변경이 되는 숫자를 담는 공간
//변경이 되는 숫자를 담을 때는 const가 아니라 let 사용
//const 지정된 값의 변화를 좋아하지 않음
//new  새로운변수명 = 들어올 값;
//const  새로운변수명 = 들어올 값;
//let  새로운변수명 = 들어올 값;
//처음에 새로운 변수명을 표기할 때는 const나 let을 붙이지만 변수명을 다시 사용할 때는
//const 나 let을 붙이지 않음

let count = 0;
const result = document.getElementById("result1");
const input = document.getElementById("input1");

function minus() {
  //Number 숫자로 문자를 변경할때 value 라고 적힌 문자열에 감싸주는것이 좋음
  const vl = Number(input.value);
  count -= vl;
  result.innerText = count;
}

function plus() {
  //result.innerText = 글자형식으로 취급될 수 있기 때문에 동일하게 Number로 감싸서
  //숫자와 + 숫자끼리 누적이 될 수 있도록 설정
  const vl = Number(input.value);
  count += vl; //이미 숫자로 모든 누적 처리를 끝낸 상태
  result.innerText = count; //숫자로 모든 누적을 끝낸 수만 가져오기

  //글자 += 숫자+숫자로 변환한다고 하긴 하지만
  //글자뒤(innerText)에 숫자를 넣는것에 불과할 수 있음
  //누군가는 숫자로 모두 처리돼서 누적해서 숫자가 올라갈 수 있음
  // result.innerText += Number(result.innerText)+input;
}

/*
let count = 0; 초기에 카운트 할 값을 설정 (누적에 대한 결과를 저장하는 변수)
count라는 변수를 사용해서 계산을 누적하고, 결과만 result로 표시하는 방식
작성하지 않아도 동작을 하긴 하지만, 
누적된 값이 사라지거나 변환될 수 있기 때문에 
누적된 값을 저장하는 공간을 따로 설정해서 안전하게 보관하는 역할. 
*/

function mul() {
  const vl = Number(input.value);
  //input result html에서 가져와 변수명으로 설정.
  //input은 한번에 value까지 작성해서 number로 감싸주기
  //누적 곱하기 *=
  //count 사용
  //누적된결과 innerText로 보여주기
  count *= vl;
  result.innerText = count;
}
