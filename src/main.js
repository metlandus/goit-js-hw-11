import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const form = document.getElementById('search-form');
const gallery = document.getElementById('gallery');

form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const query = document.getElementById('search').value;

    // Clear the gallery before displaying new results
    gallery.innerHTML = '';

    const apiKey = '19490895-43525fbfea01be26fe968a218';
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&per_page=12`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (data.hits.length > 0) {
            displayImages(data.hits);

            new SimpleLightbox('.gallery a');
        } else {
            iziToast.error({
                title: 'No Results',
                message: 'No images found for your search. Please try another keyword.',
            });
        }
    } catch (error) {
        console.error('Error fetching images:', error);

        iziToast.error({
            title: 'Error',
            message: 'Something went wrong. Please try again.',
        });
    }
});

function displayImages(images) {
    images.forEach(image => {
        const aElement = document.createElement('a');
        aElement.href = image.largeImageURL;
        aElement.classList.add('gallery-item');
        aElement.setAttribute('data-lightbox', 'gallery');

        const imgElement = document.createElement('img');
        imgElement.src = image.webformatURL;
        imgElement.alt = image.tags;
        imgElement.classList.add('gallery-image');

        aElement.appendChild(imgElement);

        gallery.appendChild(aElement);
    });
}
