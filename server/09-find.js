const numbers = [1, 30, 49, 29, 10, 13];

// Ejemplo con el for
let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
   const element = numbers[index];
   if (element == 99) {
      rta = element;
      break;
   }
}
console.log('for: ', rta);

// Ejemplo usando 'FIND'
const rta2 = numbers.find((item) => item === 99);
console.log('find: ', rta2);

// Ejemplo con OBJETOS
const products = [
   {
      name: 'Pizza',
      price: 12,
      id: '🍕',
   },
   {
      name: 'Burger',
      price: 23,
      id: '🍔',
   },
   {
      name: 'Hot dog',
      price: 34,
      id: '🌭',
   },
   {
      name: 'Hot cakes',
      price: 355,
      id: '🥞',
   },
];

const rta3 = products.find((item) => item.id === '🍎');
console.log('find objetos: ', rta3);

const rta4 = products.findIndex((item) => item.id === '🍎');
console.log('FindIndex: ', rta4);
