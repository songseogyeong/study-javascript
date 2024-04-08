// 대괄호로 선언하면array가 됨
// 파이썬의 list랑 비슷
let datas = [10, 8, 20, 3, 2];

// 추가
datas.push(100);
console.log(datas);
// 출력 결과: [10, 8, 20, 3, 2, 100]


// join(): 전달한 값으로 구분한 뒤 문자열로 리턴
console.log(datas.join(", "));

// slice(begin, end): 원하는 부분을 추출하기 위해 시작 인덱스와 마지막 인덱스를 전달한다.
// slice(begin): 시작 인덱스부터 마지막까지 추출한다.
console.log(datas.slice(1, 3));
// 출력 결과: [8, 20]
console.log(datas.slice(1));
// 출력 결과: [8, 20, 3, 2, 100]

// splice(index, count): 삭제
// splice(index, count, ...args): 교체
datas.splice(1, 1);
console.log(datas);
// 출력 결과: [10, 20, 3, 2, 100]

datas.splice(1, 1, 200);
console.log(datas);
// 출력 결과: [10, 200, 3, 2, 100]


// pop(): 마지막 요소 삭제
const dataRemove = datas.pop();
console.log(`${dataREmoved} 삭제`);
console.log(datas);

// shift(): 첫 번째 요소 삭제
const dataRemove = datas.shift();
console.log(datas);


// indexOf(value): value를 해당 Array객체에서 찾은 뒤 인덱스 번호를 리턴한다. 못찾으면 -1을 리턴한다.
let datas = [10, 8, 20, 3, 2];
const i = datas.indexOf(3)
const i = datas.indexOf(90);
console.log(i)

// spread operation
let datas = [10, 8, 20, 3, 2];
// ... 앞에 있는 값을 그대로 가져옴
const numbers = [1, ...datas, ...datas];
console.log(numbers);


// 비구조화 할당
let datas = [10, 8, 20, 3, 2];
const [number1, number2, number3, number4, number5, number6] = datas;
console.log(number1, number2, number3, number4, number5, number6);


// forEach(callback)
let datas = [10, 8, 20, 3, 2];
// 원본 객체의 값을 수정할 수 있따
datas.forEach((data, i, datas) => {
    console.log(data, i);
    datas[i] = i + 1;
});

console.log(datas);


// map(callback)
let datas = [10, 8, 20, 3, 2];
// 데이터 수정이 아님 새로운 array를 생성
const result = datas.map((data) => data * 2);
console.log(result);


// filter(callback)
let datas = [10, 8, 20, 3, 2];
const result = datas.filter((data) => data % 5 == 0);
console.log(result);


// reduce(callback)
// 누적연산할 때 좋음
// 초기값을 설정하면 data에 0번째부터 들어오고,
// 초기값을 설정하지 않으면 data에 1번째 부터 들어온다.
// 이 때, 0번째 값이 variable로 들어온다.
let datas = [10, 8, 20, 3, 2];
// reduce((variable, currentValue, index, array)
const result = datas.reduce((variable, data, i) => {
    // console.log(variable);
    // console.log(i, data);
    return variable + data ;
}, 0);

console.log(result);


let datas = [10, 8, 20, 3, 2];
const result = datas.reduce((variable, data, i) => {
    data[`${i}`] = data
    return variable;
}, {});

console.log(result);


// 문자열
// split(): 문자열을 Array 객체로 사용하고자 한다면, split를 사용한다.
"월화수목금토일".split("").forEach((data) => {
    console.log(data);
});


// includes(vaalue): value가 문자열에 포함되었는지 검사
console.log("ABCD".includes("B"));




// Array()
// 7칸을 미리 확보하라는 뜻
const datas = new Array(7);
datas.forEach((data) => {
    console.log(data);
});
