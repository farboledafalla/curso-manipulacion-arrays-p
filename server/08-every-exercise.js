const team = [
   {
      name: 'Nicolas',
      age: 12,
   },
   {
      name: 'Andrea',
      age: 8,
   },
   {
      name: 'Zulema',
      age: 2,
   },
   {
      name: 'Santiago',
      age: 14,
   },
];

const rta = team.every((item) => item.age < 15);
console.log('rta: ', rta);
