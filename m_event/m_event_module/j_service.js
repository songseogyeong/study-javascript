const photoService = (() => {
    const getPhotos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photos = await response.json();
        callback(photos[0]);
    };

    const getPhotos2 = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photos = await response.json();
        callback(photos.slice(0, 2));
    };

    return { getPhotos: getPhotos, getPhotos2: getPhotos2 };
})();
