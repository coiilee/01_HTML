function 음식주문(abc) {
  const result = document.getElementById("result");
  const price = 음식가격(abc);
  if (price > 0) {
    result.innerText =
      abc + " 주문이 완료되었습니다. 가격은" + price + " 입니다.";
  } else {
    result.innerText = "재료 소진된 메뉴로 주문이 불가합니다.";
  }
}

function 음식가격(abc) {
  if (abc === "비빔밥") {
    return 8000;
  } else if (abc === "김치찌개") {
    return 7000;
  } else if (abc === "된장찌개") {
    return 7000;
  } else if (abc === "청국장") {
    return 0; //위 if else에서 0 이하는 모두 재료소진된 메뉴로 주문불가에 보내기
  }
}
