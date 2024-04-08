// 실습 1번
// 마트에 등록되지 않은 고객이 3명이다.
// 고객별 정보는 다음과 같다.

// 1)
// 이름: 홍길동
// 나이: 30
// 포인트: 3500

// 2)
// 이름: 이순신
// 나이: 22
// 포인트: 0

// 3)
// 이름: 장보고
// 나이: 66
// 포인트: 9500

// 3명을 모두 마트에 등록 시킨다.
// 마트 객체를 만들고 각 고객을 프로퍼티로 선언한다.


// new Object() 생성자로 객체 생성 및 프로퍼티 선언
const market = new Object();
const user1 = { name: "홍길동", age: 30, point: 3500 };
const user2 = { name: "이순신", age: 22, point: 0 };
const user3 = { name: "장보고", age: 66, point: 9500 };

market.user1 = user1;
market.user2 = user2;
market.user3 = user3;

// for문을 사용하여 user 출력
// 0부터 시작하여, 3미만까지 출력, 1씩 증가 = 0~2번까지 출력
for (let i = 0; i < 3; i++) {
    // user프로퍼티 출력 시 뒤에 번호를 부여, i + 1을해서 user1, user2, user3 순으로 출력
    console.log(market[`user${i + 1}`]);
    // 출력 결과:
    // {name: '홍길동', age: 30, point: 3500}
    // {name: '이순신', age: 22, point: 0}
    // {name: '장보고', age: 66, point: 9500}
}