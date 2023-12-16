// Ejercicio: retornar un array con las palabras que tengan 4 letras o más
const words = ['amor', 'sol', 'piedra', 'día'];

const search = (array) => {
   return array.filter((item) => {
      return item.length >= 4;
   });
};

console.log(search(words));
