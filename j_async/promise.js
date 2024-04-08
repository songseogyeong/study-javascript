const DB = [];
function register(user) {
    const result = saveDB(user).then(sendEmail).then(getResult);
    return result;
}

function saveDB(user) {
    DB.push(user);
    console.log(`save ${user.name} to DB`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function sendEmail(user) {
    console.log(`email to ${user.email}`);
    return new Promise((resolve) => {
        resolve(user);
    });
}

function getResult(user) {
    return `success register ${user.name}`;
}

register({
    email: "tedhan1204@gmail.com",
    password: "1234",
    name: "hds",
}).then(console.log);

// const result = register({
//     email: "tedhan1204@gmail.com",
//     password: "1234",
//     name: "hds",
// });

// console.log(result);