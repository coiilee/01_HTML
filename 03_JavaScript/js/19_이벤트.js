//js에서 선언한 이름 = html id 속성값으로 작성된 요소 가져옥 ㅣ
const divBtn = document.getElementById("divBtn");

/**이벤트 모델 작성 방법
 * 요소.addEvent:Listener("이벤트종류",이벤트 핸들러(함수));
 */

// 클릭했을 때, 어떤 기능을 발휘할 것인지 설정
divBtn.addEventListener("click", function () {
  alert("클릭되었습니다.");
});
