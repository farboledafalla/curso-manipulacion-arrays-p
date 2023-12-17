const elements = [1, 1, 2, 2];
const otherElements = [3, 3, 4, 4];

console.log('elements original: ', elements);
console.log('otherElements original: ', otherElements);

const newArray = [...elements];

for (let index = 0; index < otherElements.length; index++) {
   const element = otherElements[index];
   newArray.push(element);
}
console.log('elements despues de modificar el array que lo clonó: ', elements);
console.log('newArray: ', newArray);

// Usando CONCAT
const newConcatArray = elements.concat(otherElements);
console.log('newConcatArray: ', newConcatArray);

// Concatenar usando el SPREAD OPERATOR
const rtaSpread = [...elements, ...otherElements];
console.log('rtaSpread: ', rtaSpread);

// Concatenar un ARRAY y un STRING
const rtaString = [...elements, ...'array'];
console.log('rtaString: ', rtaString);

// Ejercicio modificando el ARRAY original, agregando el ARRAY 'otherElements' al final
console.log('elements: ', elements);

// elements.push(otherElements);
elements.push(...otherElements);
console.log('elements despues del push: ', elements);
