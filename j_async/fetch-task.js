// https://jsonplaceholder.typicode.com/users
// zipcode만 추출하기

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json.map((user) => user.address.zipcode))
    .then((user) => console.log(user))

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => json.map((user) => user.address.zipcode))
    .then(console.log)

fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const {zipcode} = user.address;
            console.log(zipcode);
        });
    });

    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const { zipcode } = user.address;
            console.log(zipcode);
        });
    });

function test(zipcode) {
    console.log(zipcode);
}
