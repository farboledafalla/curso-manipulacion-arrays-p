// Sumar el contenido de los valores del array
const totals = [1, 2, 3, 4];

// Solución con 'for'
let sum = 0;
for (let index = 0; index < totals.length; index++) {
   const element = totals[index];
   sum += element;
}
console.log('sum: ', sum);

// Solución con 'reduce', reduce(ArrowFunction, Valor inicial)
// ArrowFunction(acumulador, elemento)
const rta = totals.reduce((sum, element) => sum + element, 0);
console.log('rta: ', rta);
