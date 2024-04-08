const photoLayout = (() => {
    const wrap = document.getElementById("photo-wrap");
    const wraps = document.getElementById("photo-wraps");

    const showPhotos = (photos) => {
        wrap.innerHTML = `<div><img src=${photos[0].thumbnailUrl}></div>`;
        wraps.innerHTML = `<div><img src=${photos[1].thumbnailUrl}></div>`;
    };

    return { showPhotos: showPhotos };
})();