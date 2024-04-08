// 10~1까지 Array 객체에 담은 후 짝수만 출력
const datas = new Array();

for (let i = 10; i > 0; i--) {
    datas.push(i);
};

console.log(datas)

const result = datas.filter((data) => data % 2 == 0);
console.log(result);


// 정리
// Array로 10칸을 확보해주고 
// fill를 사용해서 10칸 안에 초기 값을 0으로 두고
// map으로 새로운 array 값을 만들어줌
// _ < 값을 받아오기 때문에 별도로 작성하지 않을 때 사용
// 
const datas = new Array(10).fill(0).map((_, i) => 10 - i);
const evens = datas.filter((data) => data % 2 == 0);
console.log(evens);


// 한글을 숫자로
// 삼사칠구 -> 3479
// const datas = new Array()

// let hangul = "공일이삼사오육칠팔구"
// let num = "삼사칠구"
// num.forEach((data) => {
//     let i = hangul.indexOf(data);
//     datas.push(i);
// })

// 정리 
const changeNumber = (...input) => {
    const hangul = [..."공일이삼사오육칠팔구"];
    return Number(input.map((c) => hangul.indexOf(c)).join(""));
    // return parseInt(input.map((c) => hangul.indexOf(c)).join(""));
};


// 숫자를 한글로
// 3479 -> 삼사칠구
const hangul = [..."공일이삼사오육칠팔구"];
const input = "3479";
const target = [..."3479"];

const result = target.map((number) => hangul[number]).join("");
console.log(result);


// 1~100까지 합 출력
const result = new Array(100)
    .fill(0)
    .reduce((variable, _, i) => variable + i + 1, 0);
console.log(result);


// Number와 parseInt()
// Number는 일반 숫자를 객체로 변환할 수 있고, 문자열 안에 숫자만 있을 때 숫자로 변환한다.
// parseInt()는 문자열에 숫자만 추출해 주고, 원하는 진수를 두 번째 값으로 전달하면 해당 진법으로 계산해 준다.
console.log(Number("12px"));
// 출력 결과: NaN
console.log(parseInt("12px"));
// 출력 결과: 12
// int를 추출하여 출력