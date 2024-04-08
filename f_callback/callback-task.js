// 실습 1번
// 두 정수의 덧셈 결과 출력
// add 변수 선언 후 익명함수 할당
// number1, number2, callback을 매개변수로 받는다.
const add = (number1, number2, callback) => {
    // callback이 있다면 callback의 값은 number1 + number2로 넣기
    if (callback) {
        callback(number1 + number2);
    }
    // 없다면 nubmer1 + number2의 합을 리턴 값으로 받기
    return number1 + number2;
};

// add 함수에 1, 4, result 담기
// result가 callback에 담기기 때문에 result의 값은 number1 + number2를 한 5가 되고
// 이 5의 값을 출력
add(1, 4, (result) => {
    console.log(result);
    // 출력 결과: 5
});


// 실습 2번
// 두 정수의 곱셈을 구한 뒤 결과에 2를 곱해서 출력
// multply 변수 선언 후 익명함수 할당
// number1, number2, callback을 매개변수로 받는다.
const multply = (number1, number2, callback) => {
    // 만약 callback이 있으면,
    if (callback) {
        // callback은 number1과 number2의 곱을 받기
        callback(number1 * number2);
    }

    // 없으면 number1과 number2의 곱하기
    return number1 * number2;
};

// multply 함수에 3, 5, result 담기
// result가 callback에 담기기 때문에 result의 값은 number1 * number2를 한 15가 되고
// result 변수 선언 후 이 15의 값을 할당
const result1 = multply(3, 5, (result) => {
    // result에 2를 곱하여 출력
    console.log(result * 2);
    // 출력 결과: 30
});



// 실습 3번
// 성과 이름을 전달 받아서 풀네임을 만든 뒤 "000님" 출력
// makeFullName 함수 선언 후 매개변수 받기
function makeFullName(성, 이름, printName) {
    // printName에 값을 할당하고
    printName(성 + 이름);
    // 리턴 값 설정
    return 성 + 이름;
}

// printName 함수 선언 후 풀네임(= 성 + 이름)을 매개변수로 받기
function printName(풀네임) {
    // 풀네임 뒤에 '님'을 붙여서 출력
    console.log(풀네임 + "님");
    // 출력 결과: 이순신님
}

// makeFullName의 매개변수에 값을 할당
makeFullName("이", "순신", printName);


// 실습 4번
// 상품 가격과 총 합을 입력 받고 개수를 알아낸 뒤
// 개수가 5개 이하라면 true 아니면 false
// 함수 선언 후 매개변수 받기
function getCount(price, total, callback) {
    // callback이 있다면
    if (callback) {
        // total / price (개수)를 리턴 값으로 받기
        return callback(total / price);
    }

    // 없으면 total / price 하기
    return total / price;
}

// result2 변수 선언 후 getCount 함수 할당
// getCount 값을 담고 count가 5개 이하(참)인지 검사
const result2 = getCount(1000, 3000, (count) => count <= 5);
// result2 결과 출력
console.log(result2);
// 출력 결과: true


// 실습 5번
// 결제 상품 가격과 결제 상태를 전달 받아서
// 결제 상태가 true일 때 결제 완료, false 일 경우 결제 취소 출력
// 함수 선언 후 매개변수 받기
function setStatus(price, status, callback) {
    // 만약 callback이 있다면
    if (callback) {
        // status가 참일 경우 결제 완료, 거짓일 경우 결제 취소의 값을 callback에 담기
        callback(status ? `${price}원 결제 완료` : `${price}원 결제 취소`);
    }
}

// 함수에 값 담기
setStatus(3000, true, (message) => {
    // message = callback = 결제 완료 출력(status = true)
    console.log(message);
    // 출력 결과: 3000원 결제 완료
});
