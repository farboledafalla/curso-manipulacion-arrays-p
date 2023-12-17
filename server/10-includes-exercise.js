// Ejercicio: Construir un buscador que reciba un ARRAY y un STRING y retorne los elementos que contengan ese STRING
const words = ['React', 'Javascript', 'Angular', 'Vue'];

function filterByTerm(array, term) {
   return array.filter((item) => {
      return item.includes(term);
   });
}

console.log(filterByTerm(words, 'e'));
