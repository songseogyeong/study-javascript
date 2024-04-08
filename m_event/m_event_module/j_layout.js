const photoLayout = (() => {
    const wrap = document.getElementById("photo-wrap");

    const showPhotos = (photos) => {
        let text = ``;
        if (photos.length > 1) {
            photos.forEach((photo) => {
                text += `<div><img src=${photo.thumbnailUrl}></div>`;
            });
        } else {
            text = `<div><img src=${photos.thumbnailUrl}></div>`;
        }
        wrap.innerHTML = text;
    };

    return { showPhotos: showPhotos };
})();
