const postLayout = (() => {
    const showList = (posts) => {
        const table = document.querySelector("table.posts");
        let text = ``;
        posts = posts.slice(0, 10);
        posts.forEach((post) => {
            text += `<tr><td>${post.id}</td><td>${post.title}</td></tr>`;
        });
        table.innerHTML = text;
    };

    return { showList: showList };
})();
