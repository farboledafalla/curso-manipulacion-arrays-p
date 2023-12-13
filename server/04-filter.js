const words = ['spray', 'limit', 'elite', 'exuberant'];

const newArray = [];
for (let index = 0; index < words.length; index++) {
   const item = words[index];
   if (item.length >= 6) {
      newArray.push(item);
   }
}

console.log('newArray: ', newArray);
console.log('words: ', words);

// Usando el método 'filter'
const rta = words.filter((item) => item.length >= 6);
console.log('rta: ', rta);
console.log('words: ', words);

// Ejerciccio con Array de objetos
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
      customerName: 'Andres',
      total: 2220,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
];

// Traer un Array con todas las ordenes que fueron entregadas
const rta3 = orders.filter((item) => item.delivered);
console.log('rta3: ', rta3);

// Función que ejecuta un buscador
const search = (query) => {
   return orders.filter((item) => {
      return item.customerName.includes(query);
   });
};
console.log('orders: ', orders);
console.log(search('an'));
