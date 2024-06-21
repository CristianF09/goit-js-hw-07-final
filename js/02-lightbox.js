import { galleryItems } from './gallery-items.js';

// Function to create and render gallery items
function renderGalleryItems() {
    const gallery = document.querySelector('.gallery');

    galleryItems.forEach(item => {
        // Create <li> element for each image
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        // Create <a> element for the large image link
        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.original; // Use 'original' for large image link

        // Create <img> element for the small image
        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.preview; // Use 'preview' for small image
        image.alt = item.description; // Set alt text for the image

        // Append the image to the link and the link to the gallery item
        link.appendChild(image);
        galleryItem.appendChild(link);

        // Append the gallery item to the gallery list
        gallery.appendChild(galleryItem);
    });

    // Initialize SimpleLightbox after all elements are added
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',       // Use the alt attribute for captions
        captionPosition: 'bottom', // Position the caption at the bottom
        captionDelay: 250,         // Delay the caption display by 250ms
    });

    // Refresh SimpleLightbox to ensure it captures all newly added elements
    lightbox.refresh();
}

// Call the render function when the HTML document is fully loaded
document.addEventListener('DOMContentLoaded', renderGalleryItems);