export const obtenerProductos = async () => {
  const response = await fetch("https://raw.githubusercontent.com/JonatanOrdonez/fundamentos-programacion-diseno/main/2024-01/Labs/Tienda/data.json");
  const data = await response.json();
  return data.slice(0, 10); //Aqui esta diciendo que tome solo los 10 primeros valores
};

export const obtenerProductoPorId = async (id) => {
  const productos = await obtenerProductos();

  for (const producto of productos){
    if(producto.id === id) {
      return producto;
    }
  }

  throw new Error ("Producto no encontrado");
}
