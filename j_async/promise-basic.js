// 대기 이행 거절

// 이행과 거절을 받음
const promis = new Promise((resolve, reject) => {
    let check = true;
    if (check) {
        resolve("성공!");
    } else {
        reject("실패..");
    }
});

Promise
    .then((result) => {
        console.log(`resolve: ${result}`);
    })
    .catch((result) => {
        console.log(`reject: ${result}`);
    });