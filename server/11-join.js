// Ejercicio: unir los elementos del ARRAY con un separador que deseemos
const elements = ['Fire', 'Air', 'Water'];

let arrayJoin = '';
for (let index = 0; index < elements.length; index++) {
   const element = elements[index];
   if (index === elements.length - 1) {
      arrayJoin += element;
   } else {
      arrayJoin += element + '--';
   }
}
console.log('for: ', arrayJoin);

// Usando JOIN
const rta = elements.join('--');
console.log('join: ', rta);

// Ejercicio: tomar un STRING y quitarle los espacios para luego separalos con un guión (-) y construir el texto de uns URL por ejemplo
const title = 'Curso de manipulación de arrays';

const arrayWords = title.split(' ');
const urlTemporal = arrayWords.join('-');
const urlFinal = urlTemporal.toLocaleLowerCase();
console.log(urlFinal);
