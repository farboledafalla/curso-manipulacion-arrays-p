const orders = [
   {
      customerName: 'Nicolas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
];

console.log('original: ', orders);

const rta = orders.map((item) => item.total);
console.log('rta: ', rta);

// Agregar una nueva 'key' al array de objetos sin modificar el original
// Esta forma de usar '.map' no nos sirve porque tomaríamos la referencia en memoría y mutariamos el original
// const rta2 = orders.map((item) => {
//    item.tax = 0.19;
//    return item;
// });
// console.log('rta2: ', rta2);
// console.log('original: ', orders);

const rta3 = orders.map((item) => {
   return {
      ...item,
      tax: 0.19,
   };
});
console.log('rta3: ', rta3);
console.log('original: ', orders);

// Tienes un array de objetos que representan datos de productos con los siguientes atributos: (name,price,stock)
// Tu reto es agregar y calcular una nueva propiedad llamada "taxes", los impuestos deben ser del 19% con base al precio base y debes tener en cuenta que como resultado se debe dejar un valor entero, sin decimales.

export function addNewAttr(array) {
   return array.map((item) => {
      const copyItem = { ...item };
      copyItem.taxes = Math.trunc(copyItem.price * 0.19);
      return copyItem;
   });
}
