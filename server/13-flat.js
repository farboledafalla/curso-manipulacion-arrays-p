// Ejercicio: A partir de esta matriz, generar un solo ARRAY lineal
const matriz = [
   [1, 2, 3],
   [4, 5, 6, [1, 2, [1, 2]]],
   [7, 8, 9],
];

const newArray = [];
for (let index = 0; index < matriz.length; index++) {
   const element = matriz[index];
   for (let ind = 0; ind < element.length; ind++) {
      const item = element[ind];
      newArray.push(item);
   }
}
console.log('newArray: ', newArray);

// Solución con FLAT
const rta = matriz.flat(3);
console.log('rta flat: ', rta);
