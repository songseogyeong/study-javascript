// posts
fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((posts) => {
        posts.forEach((post) => {
            const {title} = post;
            console.log(title);
        });
    });


// comments
fetch("https://jsonplaceholder.typicode.com/comments")
    .then((response) => response.json())
    .then((comments) => {
        comments.forEach((comment) => {
            const {email} = comment;
            console.log(email);
        });
    });


// albums
fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json())
    .then((albums) => {
        albums.forEach((album) => {
            const {title} = album;
            console.log(title);
        });
    });


// photos
fetch("https://jsonplaceholder.typicode.com/photos")
    .then((response) => response.json())
    .then((photos) => {
        photos.forEach((photo) => {
            const {thumbnailUrl} = photo;
            console.log(thumbnailUrl);
        });
    });
    

// todos
fetch("https://jsonplaceholder.typicode.com/todos")
    .then((response) => response.json())
    .then((todos) => {
        todos.forEach((todo) => {
            const {completed} = todo;
            console.log(completed);
        });
    });


// users
fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((users) => {
        users.forEach((user) => {
            const {name} = user.company;
            console.log(name);
        });
    });
