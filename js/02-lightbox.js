import { galleryItems } from './gallery-items.js';

// Funcția pentru crearea și randarea elementelor galeriei
function renderGalleryItems() {
    const gallery = document.querySelector('.gallery');

    galleryItems.forEach(item => {
        // Crearea elementului <li> pentru fiecare imagine
        const galleryItem = document.createElement('li');
        galleryItem.classList.add('gallery__item');

        // Crearea elementului <a> pentru linkul imaginii mari
        const link = document.createElement('a');
        link.classList.add('gallery__link');
        link.href = item.large;

        // Crearea elementului <img> pentru imaginea mică
        const image = document.createElement('img');
        image.classList.add('gallery__image');
        image.src = item.small;
        image.alt = item.description; // Textul alternativ al imaginii

        // Adăugarea imaginii în link și a linkului în elementul galeriei
        link.appendChild(image);
        galleryItem.appendChild(link);

        // Adăugarea elementului galeriei în lista de galerie
        gallery.appendChild(galleryItem);

        // Adăugarea clasei 'gallery__caption' pe elementul <img>
        image.classList.add('gallery__caption');
    });

    // Inițializarea SimpleLightbox după ce toate elementele sunt adăugate
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',       // Utilizăm textul din atributul alt pentru sugestii
        captionPosition: 'bottom', // Poziționăm sugestia în partea de jos a imaginii
        captionDelay: 250,         // Afișăm sugestia la 250ms după deschiderea imaginii
        close: true,
        closeText: '&times;',
        alertError: false,
    });

    // Actualizarea SimpleLightbox după adăugarea elementelor
    lightbox.refresh();
}

// Apelarea funcției de randare a galeriei când documentul HTML este complet încărcat
document.addEventListener('DOMContentLoaded', renderGalleryItems);