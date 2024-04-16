import { obtenerProductos } from "./utils.js";

const render = async () => {
  const crearProducto = (id, nombre, imagen, precio) => {
    const highlights = document.querySelector(".highlights");

    const item = document.createElement("div");
    item.classList.add("highlightsItem");
    item.id = id;

    const image = document.createElement("img");
    image.classList.add("highLightsItem__image");
    image.alt = nombre;
    image.src = imagen;

    const title = document.createElement("p");
    title.classList.add("highlightsItem__title");
    title.textContent = nombre;

    const price = document.createElement("p");
    price.classList.add("highlightsItem__price");
    price.textContent = `$${precio}`;

    item.appendChild(image);
    item.appendChild(title);
    item.appendChild(price);
    highlights.appendChild(item);

    item.addEventListener("click", () => {
      window.location.href = `./item.html?id=${id}`;
    });
  };

  const productos = await obtenerProductos();

  for (const producto of productos) {
    crearProducto(producto.id, producto.title, producto.image, producto.price);
  }
};

document.addEventListener("DOMContentLoaded", render);
