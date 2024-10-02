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
    const apiUrl = `https://pixabay.com/api/?key=${apiKey}&q=${encodeURIComponent(query)}&image_type=photo&orientation=horizontal&safesearch=true`;

    try {
        gallery.innerHTML = '<div class="loader"></div>';
        const response = await fetch(apiUrl);
        const data = await response.json();


        if (data.hits.length > 0) {
            gallery.innerHTML = '';
            displayImages(data.hits);

            const lightbox = new SimpleLightbox('#gallery a');
            lightbox.refresh();

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
    return images.forEach(image => {
        gallery.innerHTML += `
            <li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img class="gallery-image" src="${image.largeImageURL}" alt="${image.tags}" title="${image.tags}">
            </a>
                <div class="image-captions">
                <div class="image-caption-datas">
                <p class="img-caption-head">Views</p>
                <p class="img-caption-value">${image.views}</p>
                </div>
                <div class="image-caption-datas">
                <p class="img-caption-head">Downloads</p>
                <p class="img-caption-value">${image.downloads}</p>
                </div>
                <div class="image-caption-datas">
                <p class="img-caption-head">Likes</p>
                <p class="img-caption-value">${image.likes}</p>
                </div>
                <div class="image-caption-datas">
                <p class="img-caption-head">Comments</p>
                <p class="img-caption-value">${image.comments}</p>
                </div>
            </li>
        `;
    });
}
