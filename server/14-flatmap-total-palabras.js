const words = [
   'Beautiful is better than ugly',
   'Explicit is better than implicit',
   'Simple is better than complex',
   'Complex is better than complicated',
];

const countWords = words.map((item) => item.split(' ')).flat(2).length;
console.log('Numero de palabras: ', countWords);
