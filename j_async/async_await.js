// async 안에 쓸 수 있는게 await
async function getName() {
    // 리턴값은 Promise 객체의 resolve
    return "hds";
}

async function printName() {
    const name = await getName();
    console.log(name);
}

printName();

async function getName() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    console.log(users);
}

getName();

const userService = (() => {
    const selectAll = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        const users = await response.json();
        if (callback) {
            callback(users);
        }
    };

    const findById = async (id, callback) => {
        const response = await fetch(`/abc?id=${id}`);
        const user = await response.json();
        if (callback) {
            callback(user);
        }
    };

    return { selectAll: selectAll, findById: findById };
})();

userService.selectAll((users) => {
    console.log(users);
});

userService.findById(1, (user) => {
    console.log(user);
});