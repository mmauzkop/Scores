// Wireframes:
const wireHomeEl = document.querySelector(".wire-home");
const wireMenuEl = document.querySelector(".wire-menu");
const wireShopEl = document.querySelector(".wire-shop");
const wireBoardEl = document.querySelector(".wire-board");

const imageHomeEl = document.querySelector(".image-home");
const imageMenuEl = document.querySelector(".image-menu");
const imageShopEl = document.querySelector(".image-shop");
const imageBoardEl = document.querySelector(".image-board");

wireHomeEl.addEventListener("click", function () {
  wireHomeEl.classList.add("current-wireframe");
  imageHomeEl.classList.add("current-image");
  wireMenuEl.classList.remove("current-wireframe");
  wireShopEl.classList.remove("current-wireframe");
  wireBoardEl.classList.remove("current-wireframe");
  imageMenuEl.classList.remove("current-image");
  imageShopEl.classList.remove("current-image");
  imageBoardEl.classList.remove("current-image");
});

wireMenuEl.addEventListener("click", function () {
  wireMenuEl.classList.add("current-wireframe");
  imageMenuEl.classList.add("current-image");
  wireHomeEl.classList.remove("current-wireframe");
  wireShopEl.classList.remove("current-wireframe");
  wireBoardEl.classList.remove("current-wireframe");
  imageHomeEl.classList.remove("current-image");
  imageShopEl.classList.remove("current-image");
  imageBoardEl.classList.remove("current-image");
});

wireShopEl.addEventListener("click", function () {
  wireShopEl.classList.add("current-wireframe");
  imageShopEl.classList.add("current-image");
  wireHomeEl.classList.remove("current-wireframe");
  wireMenuEl.classList.remove("current-wireframe");
  wireBoardEl.classList.remove("current-wireframe");

  imageHomeEl.classList.remove("current-image");
  imageMenuEl.classList.remove("current-image");
  imageBoardEl.classList.remove("current-image");
});

wireBoardEl.addEventListener("click", function () {
  wireBoardEl.classList.add("current-wireframe");
  imageBoardEl.classList.add("current-image");
  wireHomeEl.classList.remove("current-wireframe");
  wireMenuEl.classList.remove("current-wireframe");
  wireShopEl.classList.remove("current-wireframe");
  imageHomeEl.classList.remove("current-image");
  imageMenuEl.classList.remove("current-image");
  imageShopEl.classList.remove("current-image");
});
//////
