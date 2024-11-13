/*클래스 접근 테스트*/
function clsTest() {
  const divs = document.getElementsByClassName("cls");

  alert(divs); // 유사배열 (= HTML Collection = html 묶음들 )

  //1. divs = cls중에서 0번째로 작성된 div요소 배경색 변경
  divs[0].style.backgroundColor = "yellowgreen";
  divs[1].style.backgroundColor = "yellow";
  divs[2].style.backgroundColor = "lightblue";

  /*for문으로 각 div안에 innerTExt로 ``사용해서 ~번째 div입니다 들어가게 하기
        let i = 0 */
  //for문에 변수명.length를 사용할 때는 <=이 아니라 <를 작성해야함
  //index는 무조건 0부터 시작하기 때문에
  //let i = 0 에서 시작하는 것
  for (let i = 0; i < divs.length; i++) {
    //divs.length=3;

    divs[i].innerText = `${i}번째 div입니다.`;
    //divs[1].innerText = `1번째 div입니다.`;
    //divs[2].innerText = `2번째 div입니다.`;
    document.getElementsByClassName;
  }
}

/*
            NodeList = 유사배열 = 배열과 비슷하지만 배열은 아님. 
            배열처럼 index, length는 가지고 있으나 
            배열 전용 기능(매서드)를 제공하지 않음

            index = [] 0번째부터 length-1 번째까지 번호를 매기는 것 
                    자동으로 번호가 매겨짐 
            length = []안에 값이 얼마나 들어있는지 1부터 개수를 세는 것 
        */

function clsSpn() {
  const spns = document.getElementsByClassName("spn");
  // 각 스판 요소에 순차적으로 0번부터 접근해서
  //red ornage yellow green blue 색상 배경색 넣어주기
  spns[0].style.backgroundColor = "red";
  spns[1].style.backgroundColor = "orange";
  spns[2].style.backgroundColor = "yellow";
  spns[3].style.backgroundColor = "green";
  spns[4].style.backgroundColor = "blue";
}
