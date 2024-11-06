//초기 값 설정하는 count 세팅
let count = 0; //const값 변경이 안되기 때문에 사용X
const bd = document.getElementById("bd");

function 증가() {
  count += 1; //1씩 증가하게 만들기
  document.getElementById("count").innerText = count;

  //삼항 연산자를 이용해서 count 값에 따라 배경색 변경
  //2의 배수면 #f0f0f0 2의배수 아니면 #ffd1dc
  bd.style.backgroundColor = count % 2 == 0 ? "#f0f0f0" : "#ffd1dc";
}

function 감소() {
  count -= 1; //1씩 감소하게 만들기
  const cnt = document.getElementById("count");
  cnt.innerText = count;

  cnt.style.color = count % 2 == 0 ? "orange" : "black";
}

//초기화 버튼 누르면 숫자 0으로 되게 설정
function 초기화() {
  //모든 count를 0으로 해주길 원한다면 아래와 같이 설정해야함
  count = 0;
  document.getElementById("count").innerText = count;

  //일시적으로 초기화 버튼을 눌렀을 때 잠깐만 숫자가 0으로 보이길 원한다면
  //아래와 같이 설정
  //document.getElementById("count").innerText=0; = 눈속임
}
