// Formatear numero
export const formatPrice = (number) => {
  return new Intl.NumberFormat('es-AR',
  {
      style: 'currency',
      currency: 'ARS',
      maximumSignificantDigits: 12
  }).format(number);
};

