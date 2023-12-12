const letter = ['a', 'b', 'c'];

// FOR normal
for (let index = 0; index < letter.length; index++) {
   const element = letter[index];
   console.log('for: ', element);
}

// Nuevo metodo forEach()
letter.forEach((item) => console.log('forEach: ', item));
