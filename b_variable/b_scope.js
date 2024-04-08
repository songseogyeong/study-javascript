// 지역변수

// for문을 사용하여 반복
// 초기식 조건식 증감식
// 0부터 시작, 10미만 까지 반복, i는 1씩 증가
for (let i = 0; i < 10; i=i +1) {
    // i 출력
    console.log(i);
    // 출력 결과: 0 1 2 3 4 5 6 7 8 9
};


// 전역변수
// Node.js에서는 global 객체에서 전역변수들을 모두 관리한다.
// 브라우저(b_scope.html)에서는 window 객체에서 전역변수를 관리한다.
// 따라서, 변수가 어디에서 사용될지 모를 때에는 globalThis 객체를 사용하면 된다.

// globalThis 객체로 변수 선언

// x 변수에 10을 할당
globalThis.x = 10;

// let으로 선언 시 html에서 출력이 불가
// let x = 10;

// f 함수 선언
function f() {
    // 지역 변수
    // x 변수 선언 후 20 할당
    let x = 20;
    console.log(globalThis.x, x);
};

f();
// 출력 결과: 10 20

console.log(x);
// 출력 결과: 10
// globalThis.x = 10 값이 출력


// 함수 안에 있으니까 var여도 지역 변수
// f 함수 선언
function f() {
    // 지역 변수
    var y = 20;
    console.log(x, y);
}

f();
// 출력 결과: 10 20