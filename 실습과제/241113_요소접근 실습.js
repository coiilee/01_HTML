function changeColor() {
  const changeColor = document.getElementById("title");

  if (changeColor) {
    changeColor.style.color = "green";
  }
}

function textBold() {
  const textBold = document.getElementsByClassName("text");

  if (textBold) {
    textBold.style.color = "red";
  }
}

function showName() {
  const showName = document.getElementsByName("username").value;
  const result = document.getElementById("nameOutput");

  if (showName) {
    result.innerText = showName;
  }
}
