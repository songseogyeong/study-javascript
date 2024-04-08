// 동적 바인딩: 컴파일 시 값에 따라 자료형이 동적으로 결정된다.

// data 변수 선언 후 10인 정수를 할당
let data = 10

// data 값 출력
console.log(data);
// 출력 결과: 10
// data 타입 출력
console.log(typeof data);
// 출력 결과: number


// data 변수 선언 후 "안녕"이라는 문자열 값 할당
data = "안녕"

// data 값 출력
console.log(data);
// 출력 결과: 안녕
console.log(typeof data);
// 출력 결과: string