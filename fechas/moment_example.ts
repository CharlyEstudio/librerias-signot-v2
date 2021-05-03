import moment from 'moment';

const a = moment();

console.log("=======================================");

/* Moment.js */

// 1. Tiene Quitar y Agregar (Subtract y Add) días.
// 2. Tiene Formato.
// 3. Maneja Quries (isBefore, isSame, isAfter, isBetween, etc)
// 4. Se puede definir el local

/*// Cadena de Texto y Formatos
// Si no conoce el formato exacto de una cadena de entrada,
// pero sabe que podría ser una de muchas, puede usar una variedad de formatos.
// moment(String, String[], String = local, Boolean = estricto);
console.log("Moment Especificar formato de fecha");
console.log(moment("05-06-1995", ["MM-DD-YYYY", "DD-MM-YYYY"], 'fr', true));*/

// Validaciones
/*const val = new Date(2013, 25, 14).toString();
console.log(val);

const val2 = moment([205, 25, 32]).format();
console.log(val2);*/

// Datos Default
/*console.log('Normal', moment());
console.log('Hora 5 Directo', moment(5, 'HH'));
console.log('Hora 5 Objeto', moment({hour: 5}));
console.log('Hora 5:10', moment({hour: 5, minute: 10}));
console.log('Hora 5:10:20', moment({hour: 5, minute: 10, second: 20}));
console.log('Hora 5:10:20.300', moment({hour: 5, minute: 10, second: 20, millisecond: 300}));
console.log('Día 5', moment(5, 'DD'));
console.log('Fecha Cambiado', moment("4 05:06:07", "DD hh:mm:ss"))*/

// Aumentando los días de la semana
// Obtiene o establece el día de la semana.
//
// Este método se puede utilizar para establecer el día de la semana,
// con el domingo como 0 y el sábado como 6.
//
// Si el valor dado es de 0 a 6, la fecha resultante estará dentro
// de la semana actual (de domingo a sábado).
//
// Si se excede el rango, aumentará a otras semanas.
/*console.log(moment());
console.log(moment().day(7));
console.log(moment().day("Sunday"));*/

// Aumentando las semanas
/*console.log('El Domingo anterior', moment().weekday(-7));
console.log('El Domingo Actual', moment().weekday(0));
console.log('El Siguiente Domingo', moment().weekday(7));*/

// Día del Año
// Acepta desde 1 hasta 365 días, esto, para que se obtenga la fecha conforme los días
// que ha pasado el año (actual o anterior)
/*console.log('Año Actual', moment().dayOfYear(245));
console.log('Año Anterior', moment().dayOfYear(-245));*/

// Cambiando Semanas
// Se utilizan las semanas del año
/*console.log('Semana Año Actual', moment().week(5));
console.log('Semana Año Anterior', moment().week(-5));*/

// Semanas del Año
// Igual función que "Día del Año"
/*console.log('Semana Año Actual', moment().weekYear(5));
console.log('Semana Año Anterior', moment().weekYear(-5));*/

// Total de Semanas del Año
// console.log('Total de Semanas', moment().weeksInYear());

// Máximos & Minimos
/*a.subtract(1, 'day'); // Quitamos 1 día
const b = moment().add(1, 'day'); // Agregamos 1 día
console.log('¿Quién es mayor?', moment.max(a, b)); // Obtenemos la fecha mayor
console.log('¿Quién es menor?', moment.min(a, b)); // Obtenemos la fecha menor*/

// Manipulación
/*const man = moment().add(7, 'days').subtract(1, 'months').year(2009).hours(0).minutes(0).seconds(0);
console.log('Fecha Manipulada', man);*/

// Fecha de Inicio
// Puede ser por año, mes, día, etc.
/*moment().startOf('hour');
const inicio = moment().minutes(0).seconds(0).millisecond(0);
console.log(inicio);*/

// Fecha Final
// Funciona Igual que "Fecha de Inicio"
/*moment().endOf('hour');
const final = moment().minutes(0).seconds(0).millisecond(0);
console.log(final);*/

// Tiempo Transcurrido
/*const trans1 = moment([2007, 0, 28]);
const trans2 = moment([2007, 0, 29]);
const trans = moment([2007, 0, 29]).fromNow();
console.log('Ha Transcurrido', trans);
console.log('Ha Transcurrido', trans1.from(trans2));*/

// Diferencias
/*const dif1 = moment([2008, 9]);
const dif2 = moment([2007, 0]);
console.log('Diferencia', dif1.diff(dif2, 'years', true)); // El boolean es para hacerlo preciso*/

// Tipos de Salidas
/*console.log('Arreglo', a.toArray());
console.log('JSON', a.toJSON());
console.log('ISO 8601', a.toISOString());
console.log('Objeto', a.toObject());
console.log('Cadena de Texto', a.toString());*/

