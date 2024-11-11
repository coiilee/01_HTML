/* break 확인 */
function check1() {
  let result = 0;
  //1부터 10까지 1씩 증가하다가 5가 되면 멈춤

  //1.for문을 이용해서
  //1부터 5까지의 합을 출력
  //출력은 alert로 1부터 5까지의 합 보여주기

  for (let a = 1; a <= 10; a++) {
    result += a;
    //만약 숫자 5가 되면 멈추고싶음
    if (a == 5) {
      break; //a라는 숫자가 5가되면 행동 멈춤
      //break는 for문을 조건식에서 모든 숫자의 행동을 진행하다가
      //특정 숫자나 값이 보이면 for문을 모두 중단함
      //for문에서 중단하기 전의 값을 저장한 상태로 탈출
    }
  }
  alert(result); //result에는 1부터 5까지 더한 숫자값만 표기
}

//check2 버튼에서는
//1부터 20까지 모두 더하는 for문 작성
//15에서 for문 멈추고 15까지 더한 값을 출력

function check2() {
  let result2 = 0;
  for (let b = 1; b <= 20; b++) {
    result2 += b;
    if (b == 15) {
      break;
    }
  }
  alert(result2);
}

//1부터 20까지 출력하는데 만약 3의 배수인경우 멈추고 탈출하기

function check3() {
  for (let abc = 1; abc >= 20; abc++) {
    console.log("ABC의 값 : " + abc);

    if (abc % 3 == 0) {
      break;
    }
    console.log("ABC의 값[ " + abc + " ]");
  }
}
