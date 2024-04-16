export const obtenerProductos = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data.slice(0, 10);
};
