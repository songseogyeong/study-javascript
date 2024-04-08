// change 함수 선언 후 object를 매개 변수로 받고 이 매개변수는 this로 호출된다
function change(object) {
    // includes: 문자열 값이 포함되어 있는지 검사
    // images가 icon5면 icon6으로, 아니면 icon5로 변경
    // 삼항연산자: 조건식 ? 참 :  거짓
    object.src = "images/" + (object.src.includes("icon5.png") ? "icon6.png" : "icon5.png");
}