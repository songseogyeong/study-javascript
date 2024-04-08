// 함수는 무조건 값으로 본다.
function add(number1, number2) {
    return number1 + number2;
}
function add(number1, number2, number3) {
    return number1 + number2 + number3;
}
// 출력 결과: NaN > 값

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 초기 값을 설정할 수 있다.
function add(number1, number2, number3) {
    if (number3 === void 0) { number3 = 0; }
    return number1 + number2 + number3;
}
var result = add(1, 3);
console.log(result);
// 아이디, 비밀번호, 닉네임을 전달 받는다.
// 이 때 닉네임의 기본 값은 '없음'으로 설정한다.
function get_info(id, password, nickname) {
    if (nickname === void 0) { nickname = '없음'; }
    console.log(id, password, nickname);
}
get_info("송서경", "1234");
Get - ExecutionPolicy;
Set - ExecutionPolicy;
Unrestricted;
