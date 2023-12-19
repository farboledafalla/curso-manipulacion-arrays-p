// Ejercicio: Tener un array completo de todos los atributos de los usuarios

const users = [
   { userId: 1, username: 'Tom', attributes: ['Nice', 'Cute'] },
   { userId: 2, username: 'Mike', attributes: ['Lovely'] },
   { userId: 3, username: 'Nico', attributes: ['Nice', 'Cool'] },
];

// Como lo único que me importa de los usuario son sus atributos
const arrayDeArrays = users.map((user) => user.attributes);
const arrayFlat = arrayDeArrays.flat();
console.log('arrayDeArrays: ', arrayDeArrays);
console.log('arrayFlat: ', arrayFlat);

// Ejercicio con FLATMAP
const arrayFlatMap = users.flatMap((user) => user.attributes);
console.log('arrayFlatMap: ', arrayFlatMap);
