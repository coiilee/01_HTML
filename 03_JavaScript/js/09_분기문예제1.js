function selectMenu() {
  let choice;
  const result = document.getElementById("result");
  while (choice !== null) {
    choice = prompt("메뉴 번호를 입력해주세요. \n 1,2,3, 종료만 입력 가능");

    switch (choice) {
      case "1":
      case "아메리카노": //input은 기본으로 숫자가 아니라 글자값으로 입력받기 때문에 숫자 ""로 감싸줘야함
        result.innerText = "아메리카노를 선택하셨습니다.";
        console.log("아메리카노 선택함");
        return;
      case "2":
      case "카페라떼":
        result.innerText = "카페라떼를 선택하셨습니다.";
        console.log("카페라떼 선택함");
        return;
      case "3":
      case "프라푸치노":
        result.innerText = "프라푸치노를 선택하셨습니다.";
        console.log("프라푸치노 선택함");
        return;
      case "종료":
        result.innerText = "주문을 종료합니다.";
        return;
      default:
        result.innerText = "잘못된 입력입니다. 다시 선택해주세요.";
        console.log("잘못 선택함");
        return;

      //2와 3 종료 case를 각각 만들고 ;
      //2 카페라떼 3n은 프라푸치노,
      //종료는 주문을 종료합니다.
      //잘못된 입력입니다. 다시선택해주세요.
    }
  }
}
