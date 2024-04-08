const button = document.getElementById("get-photo");
const buttonPhotos = document.getElementById("get-photos");

if (button) {
    button.addEventListener("click", () => {
        photoService.getPhotos(photoLayout.showPhotos);
    });
}

if (buttonPhotos) {
    buttonPhotos.addEventListener("click", () => {
        photoService.getPhotos2(photoLayout.showPhotos);
    });
}
