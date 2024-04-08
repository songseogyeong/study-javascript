const button = document.getElementById("get-photo");

button.addEventListener("click", () => {
    photoService.getPhotos(photoLayout.showPhotos);
});
