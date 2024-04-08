const button = document.getElementById("get-todos");
button.addEventListener("click", (e) => {
    todoService.findAll(todoLayout.showList)
});