// El objetivo del ejercicio es si al menos uno cumple con la condición...retornamos un 'true'

// Ejercicio: Saber si uno de los elementos es 'par'
const numbers = [1, 2, 3, 4];

// Este es el ejercicio con el 'for'...de la manera tradicional
let rta = false;
for (let index = 0; index < numbers.length; index++) {
   const element = numbers[index];
   if (element % 2 === 0) {
      rta = true;
      break;
   }
}
console.log('rta: ', rta);

// Este es el ejercicio con 'SOME'
const rta2 = numbers.some((item) => item % 2 === 0);
console.log('rta2: ', rta2);

// SOME trabajando con objetos
// Ejerciccio con Array de objetos
const orders = [
   {
      customerName: 'Nicolas',
      total: 60,
      delivered: true,
   },
   {
      customerName: 'Zulema',
      total: 120,
      delivered: false,
   },
   {
      customerName: 'Santiago',
      total: 180,
      delivered: true,
   },
   {
      customerName: 'Andres',
      total: 2220,
      delivered: true,
   },
   {
      customerName: 'Valentina',
      total: 240,
      delivered: true,
   },
];

// Ejercicio: Ver si al menos existe una orden que fue entregada

const rta3 = orders.some((item) => item.delivered);
console.log('rta3: ', rta3);

// Ejercicio más complejo

// Array de fechas
const dates = [
   {
      startDate: new Date(2021, 1, 1, 10),
      endDate: new Date(2021, 1, 1, 11),
      title: 'Cita de trabajo',
   },
   {
      startDate: new Date(2021, 1, 1, 15),
      endDate: new Date(2021, 1, 1, 15, 30),
      title: 'Cita con mi jefe',
   },
   {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: 'Cena',
   },
];

// Se desea agendar una cita y se debe validar que no se cruce con al menus una cita existente
// Ejemplo de cita 'Date(2021, 1, 1, 15, 30): El 01 de Enero de 2021 a las 3:30 pm

// Nueva cita que se desea agendar
const newAppointment = {
   startDate: new Date(2021, 1, 1, 19),
   endDate: new Date(2021, 1, 1, 20, 30),
};

// Se cruzaría con esta cita
/*
   {
      startDate: new Date(2021, 1, 1, 20),
      endDate: new Date(2021, 1, 1, 21),
      title: 'Cena',
   },
 */

// Importamos la librería para trabajar con fechas
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

// Creamos nuestra propia función
const isOverlap = (newDate) => {
   return dates.some((date) => {
      return areIntervalsOverlapping(
         { start: date.startDate, end: date.endDate },
         { start: newDate.starDate, end: newDate.endDate }
      );
   });
};

console.log('Espacio ocupado: ', isOverlap(newAppointment));

// Esta librería no funcionó, se instaló la versión que usa el profesor (2.22.1) y no funcionó, tampoco funcionó la versión (2.24.0)
