function checkHobby() {
  const hobbys = document.getElementsByName("hobby");
  let str = ""; //체크된 값 누적
  let count = 0;

  //for문을 이용해 체크 여부 검사하고, 체크된 경우 누적된 체크값 확인 및 카운트 증가하기
  for (let i = 1; i < hobbys.length; i++) {
    if (hobbys[i].checked) {
      str += hobbys[i].value + " ";
      count++;
    }
  }

  //만약 선택된 취미가 없다면 선택한 취미가 없습니다.
  const inText = `${str} <br> 선택된 취미 개수 : ${count}개`;

  if (count > 0) {
    document.getElementById("result").innerHTML = inText;
  } else {
    //1보다 아래 0 -1 -2..
    document.getElementById("result").innerHTML = "선택한 취미가 없습니다.";
  }

  //삼한 연산자로 표현
  const inText = count > 0 ? true : false;
}
