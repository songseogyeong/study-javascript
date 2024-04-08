// const user = {
//     id: 1,
//     name: "han",
// };

// // 비구조 할당(구조 분해)
// const { id, name } = user
// console.log(id, name);
// // 출력 결과: 1 han


// // 프로퍼티 이름 바꾸려면 : 뒤에 써주기
// // id 프로퍼티명을 number으로 변경
// const { id: number, name, age = 10 } = user;
// console.log(number, name, age);
// // 출력 결과: 1 han 10

// // 객체 스프레드
// // user 값 개수가 몇 개가 올지 모르기 때문에 가변인자로 받기
// let userUpdated = {...user};
// console.log(userUpdated);
// // 출력 결과: {id: 1, name: 'han'}

// // 이미 해당 프로퍼티가 존재하면 수정된다
// // name이라는 프로퍼티가 이미 존재하기 때문에, 값이 han에서 ted로 변경됨
// // 만약 name 프로퍼티가 없으면 새롭게 추가
// let userUpdated = {...user, name: "ted"};
// console.log(userUpdated);
// // 결과 출력: {id: 1, name: 'ted'}



// 실습 1번
const user = {
    id: 1,
    name: "han",
};

// age 프로퍼티가 없기 때문에 추가된다.
const userUpdated = { ...user, age: 20 };

// age 뒤에 가변인자를 작성했기 때문에, age가 먼저 출력되고 나머지 프로퍼티는 묶여서 출력된다.
const { age, ...rest } = userUpdated;
console.log(age, rest);
// 출력 결과: 20 {id: 1, name: 'han'}
