document.addEventListener('DOMContentLoaded', () => {
    const bannerContainer = document.getElementById('banner-container');

    function actualizarBanner() {
        axios.get('https://foodish-api.herokuapp.com/api/')
            .then(response => {
                const imageUrl = response.data.image;
                bannerContainer.innerHTML = `<img src="${imageUrl}" alt="Comida del día">`;
            })
            .catch(error => console.error('Error al obtener imagen', error));
    }

    setInterval(actualizarBanner, 10000);
});
