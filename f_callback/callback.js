// callback 함수는 "분리" 목적이다.

// 익명함수
// arrow expression (arrow function)
() => {}

// 익명 함수를 재사용하고 싶다면, const로 변수 선언 후 익명함수 할당
const [함수명] = () => {};

// arrow expression(function)
// printName 함수 선언 후 name을 매개변수로 받기
function printName(name) {
    // name 출력
    console.log(name);
}

// 위 함수를 arrow expression으로 수정
// printName 변수 선언 후 익명함수 선언
// 매개변수 name
const printName = (name) => {
    // name 출력
    console.log("name");
};

// 함수 사용
printName();
// 출력 결과: name

