import products from "./Mock.json";

// Llamada al a API
export const getFetch = new Promise((resolve) => {
  //Tareas sincronizadas
  setTimeout(() => {
    resolve(products);
  }, 2000);
});

// Formatear numero
export const formatPrice = (number) => {
  return new Intl.NumberFormat('es-AR',
  {
      style: 'currency',
      currency: 'ARS',
      maximumSignificantDigits: 12
  }).format(number);
};

