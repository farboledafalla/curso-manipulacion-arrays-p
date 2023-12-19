// Ejercicio: Crear un ARRAY con el atributo 'startDate' de todos los OBJETOS, recordar que se tiene un OBJETO --> que tiene un ARRAY

const calendars = {
   primaryCalendar: [
      {
         startDate: new Date(2021, 1, 1, 15),
         endDate: new Date(2021, 1, 1, 15, 30),
         title: 'Cita 1',
      },
      {
         startDate: new Date(2021, 1, 1, 17),
         endDate: new Date(2021, 1, 1, 18),
         title: 'Cita 2',
      },
   ],
   secondaryCalendar: [
      {
         startDate: new Date(2021, 1, 1, 12),
         endDate: new Date(2021, 1, 1, 12, 30),
         title: 'Cita 2',
      },
      {
         startDate: new Date(2021, 1, 1, 9),
         endDate: new Date(2021, 1, 1, 10),
         title: 'Cita 4',
      },
   ],
};

const cal1 = calendars.primaryCalendar.flatMap((cal) => cal.startDate);
const cal2 = calendars.secondaryCalendar.flatMap((cal) => cal.startDate);
const calFinal = cal1.concat(cal2);

console.log('calFinal: ', calFinal);

// Otra forma de hacerlo

// Convertir un OBJETO en un ARRAY de los atributos o 'keys'
const objToArray = Object.keys(calendars);
console.log('objToArray: ', objToArray);

// Convertir un OBJETO en un ARRAY de los valores o 'values'
const objToArrayValues = Object.values(calendars);
console.log('objToArrayValues: ', objToArrayValues);

// Usando FLAT obtenemos a partir de los valores un ARRAY de OBJETOS, aun no tenemos lo que queremos
const arrayObjFlat = Object.values(calendars).flat();
console.log('arrayObjFlat: ', arrayObjFlat);

// Usando FLATMAP
// const arrayObjFlatMap = Object.values(calendars).flatMap(
//    (item) => item.startDate
// );
// console.log('arrayObjFlatMap: ', arrayObjFlatMap);

const arrayObjFlatMap = Object.values(calendars).flatMap((item) => {
   return item.map((date) => date.startDate);
});
console.log('arrayObjFlatMap: ', arrayObjFlatMap);
