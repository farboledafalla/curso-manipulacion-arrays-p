// Ejercicio: hacer un histograma, es decir, decir cuantas veces está cada elemento
// Esto debería devolvermelo en un objeto usando 'reduce()'
const items = [1, 3, 2, 3];

const rta = items.reduce((obj, item) => {
   // Si el objeto con key 'item', no existe
   if (!obj[item]) {
      // Lo inicializó con 1
      obj[item] = 1;
   } else {
      // Si existe el objeto con key 'item', le suma uno
      obj[item] += 1;
   }
   return obj;
}, {});

console.log('rta: ', rta);

// Otro ejercicio pero con un objeto, deseamos saber cuantos hay en cada nivel
const data = [
   {
      name: 'Nicolas',
      level: 'low',
   },
   {
      name: 'Andrea',
      level: 'medium',
   },
   {
      name: 'Zulema',
      level: 'hight',
   },
   {
      name: 'Santiago',
      level: 'low',
   },
   {
      name: 'Valentina',
      level: 'medium',
   },
   {
      name: 'Lucia',
      level: 'hight',
   },
];

// Saco un array de elementos 'level' y le concateno la otra función (reduce)
const rta2 = data
   .map((item) => item.level)
   .reduce((obj, item) => {
      // Si el objeto con key 'item', no existe
      if (!obj[item]) {
         // Lo inicializó con 1
         obj[item] = 1;
      } else {
         // Si existe el objeto con key 'item', le suma uno
         obj[item] += 1;
      }
      return obj;
   }, {});

console.log('rta2: ', rta2);
