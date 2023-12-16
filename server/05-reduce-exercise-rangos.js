const numbres = [1, 3, 5, 7, 9, 2, 4, 6, 8, 10, 1, 3, 7, 9, 2, 4, 8, 10];

//const obj = [{ '1-5': 0 }, { '6-8': 0 }, { '9-10': 0 }];
const rta = numbres.reduce((obj, item) => {
   if (item >= 1 && item <= 5) {
      if (!obj['1-5']) {
         obj['1-5'] = 1;
      } else {
         obj['1-5'] += 1;
      }
   } else if (item >= 6 && item <= 8) {
      if (!obj['6-8']) {
         obj['6-8'] = 1;
      } else {
         obj['6-8'] += 1;
      }
   } else if (item >= 9 && item <= 10) {
      if (!obj['9-10']) {
         obj['9-10'] = 1;
      } else {
         obj['9-10'] += 1;
      }
   }
}, {});

console.log(obj);
