function changeColor() {
  const changeColor = document.getElementById("title");

  changeColor.style.color = "green";
}

function textBold() {
  const textBold = document.getElementsByClassName("text");
  for (let i = 0; i <= 2; i++) {
    textBold[i].style.color = "red";
  }
}

function showName() {
  const showName = document.getElementsByName("username")[0].value; //element's'는 가짜배열 형식 (nodelist)
  const result = document.getElementById("nameOutput");

  result.innerText = showName;
}
