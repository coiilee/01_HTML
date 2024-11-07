function checkGrade() {
  const score = document.getElementById("inputScore").value;
  const msg = document.getElementById("gradeMsg");

  if (score >= 90) {
    msg.innerText = "A";
    msg.className = "A";
  } else if (score >= 80) {
    msg.innerText = "B";
    msg.className = "B";
  } else if (score >= 70) {
    msg.innerText = "C";
    msg.className = "C";
  } else if (score >= 60) {
    msg.innerText = "D";
    msg.className = "D";
  } else {
    msg.innerText = "F";
    msg.className = "F";
  }
}
