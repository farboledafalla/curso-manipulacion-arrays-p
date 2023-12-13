const letters = ['a', 'b', 'c'];

// Con for
const newArray = [];
for (let index = 0; index < letters.length; index++) {
   const element = letters[index];
   newArray.push(element + '++');
}

console.log('original: ', letters);
console.log('nuevo: ', newArray);

const newArrayMap = letters.map((item) => item + '++');
console.log(newArrayMap);
