// setTimeout은 0초를 설정해도 1ms 후 실행되도록 설계되어 있다.

// // 내부적인 순서는 있어도 속도가 빨라서 출력은 다르게 나올 수 있음
// // 실제 처리는 그 순서에 맞게 처리됨
// // timer의 기본 설정이 1ms초로 설정되어있어서 check가 그거보다 빨리 처ㅣㄹ되면 빨리 나올 수 있음
// setTimeout(() => {
//     console.log("timer");
// }, 0);

// setImmediate(() => {
//     console.log("check");
// });



// const fs = require("fs");

// fs.readFile("test.txt", (result) => {
//     setTimeout(() => {
//         console.log("timer");
//     });
    
//     setImmediate(() => {
//         console.log("check");
//     });
// });



// tick이 모두 작업된 후 다음 절차로 넘어간다. 
// // tick이 먼저됨
// // setTick 안에 setTick을 받았기 때문에 지금 무한루프 도는 중
// const setTick = () => {
//     process.nextTick(setTick)
// }

// setTick ();

// setTimeout(() => {
//     console.Console.log("timer")
// })



// 1. 타이머 큐에 등록
// 2. 검사 큐에 등록
// 3. 틱 큐에 등록

// 1. 틱 큐 비우기
// 1-1. 1번 틱 안에 타이머2를 처리하고자 타이머1도 처리된다.
// 1-2. 1번 틱 안에 검사2를 처리하고자 검사1도 처리된다.
// 2. 2번 틱 처리
setTimeout(() => {
    console.log("time1");
}, 0)
setImmediate(() => {
    console.log("check1");
});

process.nextTick(() => {
    setTimeout(() => console.log("timer2"), 0);
    setImmediate(() => {
        Process.nextTick(() => console.log("tick2"));
        console.log("check2");
    });
    console.log("tick1");
});