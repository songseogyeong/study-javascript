const userLayout = (() => {
    const showList = (users) => {
        const table = document.querySelector("table.users");
        let text = ``;
        users = users.slice(0, 2);
        users.forEach((user) => {
            text += `<tr><td>${user.name}</td><td>${user.username}</td></tr>`
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();

userService.findAll(userLayout.showList);