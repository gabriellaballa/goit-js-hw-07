/** @format */

import { galleryItems } from "./gallery-items.js";
// Change code below this line

//console.log(galleryItems);
const listEl = document.querySelector(".gallery");
//console.log(listEl);
galleryItems.forEach((item) => {
  const listItemEl = document.createElement("li");
  listItemEl.classList.add("gallery__item");
  listItemEl.innerHTML = `<a class="gallery__link" href= "${item.original}">
    <img
    class="gallery__image"
    src = "${item.preview}"
    alt="${item.description}"/>
  </a>`;
  listEl.append(listItemEl);
});

const gallery = new SimpleLightbox(".gallery a", {
  captions: true,
  captionSelector: "img",
  captionType: "attr",
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  captionClass: "",
});
