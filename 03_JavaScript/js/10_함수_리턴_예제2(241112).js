function 빵구매(abc) {
  //const price로 빵 가격 변수 선언 , 가격이 0원 초과일때 abc+구매완료되었습니다. // 가격은 000입니다 .
  // 나머지 : 판매 예정입니다 // if else 로 나타내기
  const result = document.getElementById("result");
  const price = 빵가격(abc);

  if (price > 0) {
    result.innerText =
      abc + " 구매 완료되었습니다. 가격은" + price + " 원 입니다.";
  } else {
    result.innerText = "판매 예정입니다.";
  }
}

function 빵가격(abc) {
  if (abc === "크루와상") {
    return 3000;
  } else if (abc === "식빵") {
    return 2000;
  } else if (abc === "베이글") {
    return 2500;
  } else {
    return 0;
  }
}
