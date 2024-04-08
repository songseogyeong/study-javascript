// 비교
// == : 값만 비교
// === :  값과 타입 모두 비교

data1 = 1;
data2 = "1";

// 값만 비교
console.log(data1 == data2)
// 출력 결과: true
// ==로 값만 비교하였을 때, 값이 일치함으로 true

// 값과 타입을 비교
console.log(data1 === data2)
// 출력 결과: false
// ===로 값과 타입을 비교하였을 때, 값은 같지만 타입이 다르기 때문에 false


// or
// ||: 앞에 있는 값이 false 값이라면, 뒤에 있는 값으로 사용된다.
// false로 취급되는 값: "", null, 0, undefined
let value;

// value에 값이 안 들어가있기 때문에 undefined = false
let data = value || 10;
// false이므로 data에는 10의 값이 할당
console.log(data);
// 출력 결과: 10


// and
// && : 앞의 조건식이 false라면, false이고
// 앞의 조건식이 true라면 뒤에 적은 값으로 대체된다.
let check1 = true;

// check는 true이기 때문에 뒤에 적은 10의 값이 할당
console.log(check1 && 10);
// 출력 결과: 10


// 삼항 연산자: ?:
// 조건식 ? 참 : 거짓
let check2 = 10 > 11;

// check2가 참이면 10, 거짓이면 11 출력
console.log(check2 ? 10 : 11);
// 출력 결과: 11