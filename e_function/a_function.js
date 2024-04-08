// 함수는 무조건 값으로 본다.

// add 함수 선언 후 number1, number2를 매개변수로 받고
// 두 값의 합을 리턴 값으로 받기
function add(number1, number2) {
    return number1 + number2;
};

// 디폴트 파라미터
// 값이 전달되지 않았을 경우 초기 값을 설정할 수 있다.
function add(number1, number2, number3 = 0) {
    return number1 + number2 + number3;
};

let result = add(1, 3);
console.log(result);
// 출력 결과: 4


// // 실습
// // 아이디, 비밀번호, 닉네임을 전달 받는다.
// // 이 때 닉네임의 기본 값은 '없음'으로 설정한다.
// function get_info(id, password, nickname = '없음') {
//     console.log(id, password, nickname);
// }

// get_info("송서경", "1234");
// // 출력 결과: 송서경 1234 없음


// 가변인자: 매개변수의 개수가 지정되지 않을 때
// add 함수 선언 후 매개변수의 개수는 알 수 없다.
function add(...args) {
    // in 인덱스
    // in은 인덱스 번호를 가져온다.
    // 0번째 부터 시작
    for (let i in args) {
        // python format string f'{}' = javascript `${}`
        // i 출력
        console.log(`index: ${i}`);
    }

    // of 값
    // for문을 사용하여 value의 값을 하나하나 담아온다.
    for (let i of args) {
        // i 출력
        console.log(`value: ${i}`);
    }
}

add(1, 2, 3, 4, 5);
