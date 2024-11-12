//let 변수명 ; 작성하기에는 코드가 너무 복잡하기때문에
// 사용하고자 하는 변수명만 작성
//어떤 값이 들어올지 모르기 때문에 let으로 변수명만 작성
let fruitPrice = 0; //선택기능 바깥에 위치
function 선택(abc) {
  const price = document.getElementById("price");

  switch (abc) {
    case "apple":
      fruitPrice = 2000;
      break;

    case "grape":
      fruitPrice = 5000;
      break;

    case "kiwi":
      fruitPrice = 3000;
      break;
    //버튼으로 클릭할 경우에는 잘못 클릭할 이유가 없기 때문에
    //default를 작성하지 않아도 됨
  }

  while (fruitPrice) price.innerText = "총 금액 : " + fruitPrice;
  //버튼을 눌렀을 때 나오는 과일 가격의 총 금액
}
