import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulGallery = document.querySelector(".gallery");

function createGalleryMarkup(items) {
  return items
    .map(
      (item) =>
        `<li class="gallery__item">
        <a class="gallery__link" href="${item.original}">
          <img
            class="gallery__image"
            src="${item.preview}"
            alt="${item.description}"
          />
        </a>
      </li>`
    )
    .join("");
}
const addGalleryMarkup = createGalleryMarkup(galleryItems);

ulGallery.innerHTML = addGalleryMarkup;
const gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: "250",
});

ulGallery.addEventListener("click", onImageClick);

function onImageClick(event) {
  function blockAction(event) {
    event.preventDefault(event);
  }

  blockAction(event);
  if (event.target.nodeName !== "IMG") {
    return;
  }
  gallery.open(event.target);

  ulGallery.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      gallery.close();
    }
  });
}
