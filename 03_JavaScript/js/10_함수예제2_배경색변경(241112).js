/* 
색상 변경 기능을 클릭해서 각 색상을 매개변수로 전달받은 후 , 
switch case문을 활용해서 각 색상이 들어올 때마다 배경색 변경되게 설정 
case 종료문 break; 사용하기 
css 는 2순위로 설정되게. 
*/

function 색상변경(color) {
  const background = document.getElementById("bd");
  switch (color) {
    case "lightblue":
      background.style.backgroundColor = "lightblue";
      break;

    case "lightcoral":
      background.style.backgroundColor = "lightcoral";
      break;

    case "lightyellow":
      background.style.backgroundColor = "lightyellow";
      break;
    case "lightgreen":
      background.style.backgroundColor = "lightgreen";
      break;
    case "lightgray":
      background.style.backgroundColor = "lightgray";
      break;
  }
}
