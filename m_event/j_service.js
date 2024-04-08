const photoService = (() => {
    const getPhotos = async (callback) => {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/photos"
        );
        const photos = await response.json();
        callback(photos);
    };

    return { getPhotos: getPhotos };
})();
