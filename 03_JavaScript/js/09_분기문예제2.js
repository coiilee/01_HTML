// let은 변화가 가능한 값이기 때문에 변수명에 변수값을 넣지 않아도 가능하지만,
// const의 경우 상수라 값이 변하면 안되기 때문에,
//초기에 상수명과 상수명에 들어갈 상수값을 항시 같이 작성.

function selectSeason() {
  let season;
  const result = document.getElementById("result");
  const bd = document.getElementById("bd");
  while (season !== null) {
    season = prompt("숫자를 입력해주세요.");

    switch (season) {
      case "3":
      case "4":
      case "5":
        bd.style.backgroundColor = "lightpink";
        alert("봄이네요");
        console.log("봄");
        break;
      case "6":
      case "7":
      case "8":
        bd.style.backgroundColor = "lightyellow";
        alert("여름");
        break;
      case "9":
      case "10":
      case "11":
        bd.style.backgroundColor = "sandybrown";
        alert("가을");
        break;
      case "12":
      case "1":
      case "2":
        bd.style.backgroundColor = "lightblue";
        alert("겨울");
        break;
      case "종료":
        bd.style.backgroundColor = "white";
        alert("종료하기");
        return;
      default:
        bd.style.backgroundColor = "lightgray";
        alert("잘못된 선택입니다.");
        break;
    }
  }
}
