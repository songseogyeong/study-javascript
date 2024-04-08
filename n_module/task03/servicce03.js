const userService = (() => {
    const findAll = async (callback) => {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();
        callback(users);
    };
    return { findAll: findAll };
})();
