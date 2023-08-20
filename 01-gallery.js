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
    data-source="${item.original}"
    alt="${item.description}"/>
  </a>`;
  listEl.append(listItemEl);
});

listEl.addEventListener("click", openImageInLightbox);

let modalInstance = null;

function openImageInLightbox(event) {
  const clickedOn = event.target;
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  modalInstance = basicLightbox.create(
    `<img width="1400" height="900" src="${clickedOn.dataset.source}"/>`
  );

  modalInstance.show();

  document.addEventListener("keydown", escapeKeyListener);
}

function escapeKeyListener(event) {
  if (event.key === "Escape" && modalInstance) {
    modalInstance.close(); // Close the modal
    document.removeEventListener("keydown", escapeKeyListener); // Remove the event listener
  }
}
