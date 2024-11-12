//function의 위치나 순서는 코딩을 실행하는데 있어
//어디에 있든 상관이 없음
//하지만 const나 let으로 작성한 것은 순서 상관이 있기 때문에
//script를 작성하고 맨 위에 작성해주는 것이 좋음.
//각 차의 가격을 확인하고 반환하는 함수
function 차가격(model) {
  //소나타,아반떼,제네시스 각 가격을 확인할것
  if (model === "소나타") {
    //차 구매 기능에 return을 이용해서 가격 전달을  할 것
    return 1000; //소나타 가격
  } else if (model === "아반떼") {
    return 1100; //아반떼 가격
  } else if (model === "제네시스") {
    return 1200; //제네시스 가겨
  }
}

function 차구매(model) {
  const price = 차가격(model);
  const result = document.getElementById("result");
  result.innerText =
    model + " 구매가 완료되었습니다. 가격은 " + price + " 입니다.";
}

function 차구매() {
  const result = prompt("구매할 차종을 입력하세요.");
  if (abc) {
    result.innerText = abc + " 가 선택되었습니다.";
  } else {
    alert("차종을 입력해주세요");
  }
}
