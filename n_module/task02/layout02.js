const todoLayout = (() => {
    const showList = (todos) => {
        const table = document.querySelector("table.todos");
        let text = ``;
        todos = todos.slice(0, 10);
        todos.forEach((todo) => {
            // 값이 있기 때문에 todo.completed는 true
            // if (todo.completed) {
            //     text += `<tr style = "color: green;"><td>${todo.id}</td><td>${todo.title}</td></tr>`;
            // } else {
            //     text += `<tr style = "color: red"><td>${todo.id}</td><td>${todo.title}</td></tr>`;
            // }
            // && 앞에 있는 값이 true면 뒤에 있는 것으로 적용된다!
            text += `<tr${todo.completed && ' class="on"'}><td>${
                todo.id
            }</td><td>${todo.title}</td></tr>`;
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();