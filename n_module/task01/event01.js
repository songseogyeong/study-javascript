const button = document.getElementById("get-posts");
button.addEventListener("click", (e) => {
    postService.findAll(postLayout.showList);
});
