const pets = ['cat', 'dog', 'bat'];

let rta = false;
for (let index = 0; index < pets.length; index++) {
   const element = pets[index];
   if (element === 'cat') {
      rta = true;
      break;
   }
}
console.log('for: ', rta);

const rta2 = pets.includes('cat');
console.log('includes: ', rta2);
