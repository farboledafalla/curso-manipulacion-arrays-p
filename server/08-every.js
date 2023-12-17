// Ejercicio: validar si todos los elementos son menores a 40

const numbers = [1, 30, 49, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
   const element = numbers[index];
   if (element >= 40) {
      rta = false;
      break;
   }
}
console.log('rta: ', rta);

const rta2 = numbers.every((item) => item < 40);
console.log('rta2: ', rta2);
