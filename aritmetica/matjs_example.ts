import { create, all } from 'mathjs';

const config = { };
const math = create(all, config);

// @ts-ignore
const resp = math
    .chain(20.34566)
    .add(13.234234)
    .add(5)
    .multiply(2)
    .divide(4)
    .done();
console.log(resp);

// @ts-ignore
const suma = math
    .chain(20.34566)
    .add(13.234234)
    .done();
console.log(suma);

// @ts-ignore
const restar = math
    .chain(50)
    .subtract(4)
    .subtract(5)
    .done();
console.log(restar);

// @ts-ignore
const multiplicar = math
    .chain(3)
    .multiply(2)
    .multiply(5)
    .done();
console.log(multiplicar);

// @ts-ignore
const dividir = math
    .chain(20)
    .divide(2)
    .divide(5)
    .done();
console.log(dividir);

// @ts-ignore
const redondearAbajo = math
    .round(3.22);
console.log(redondearAbajo);

// @ts-ignore
const redondearArriba = math
    .round(3.82);
console.log(redondearArriba);

// @ts-ignore
const redondearNegativoArriba = math
    .round(-4.2);
console.log(redondearNegativoArriba);

// @ts-ignore
const redondearNegativoAbajo = math
    .round(-4.7);
console.log(redondearNegativoAbajo);

// @ts-ignore
const redondearArribaLimitandoDecimal = math
    .round(3.22, 1); // Se limita a que muestre 1 decimal
console.log(redondearArribaLimitandoDecimal);

// @ts-ignore
const redondearAbajoLimitandoDecimal = math
    .round(3.88, 1); // Se limita a que muestre 1 decimal
console.log(redondearAbajoLimitandoDecimal);

// @ts-ignore
const esEntero = math
    .isInteger(20);
console.log(esEntero);

// @ts-ignore
const noEsEntero = math
    .isInteger(20.6);
console.log(noEsEntero);

// @ts-ignore
const esPositivo = math
    .isPositive(-20);
console.log(esPositivo);

// @ts-ignore
const esNegativo = math
    .isNegative(-20);
console.log(esNegativo);

/* Mayor Que */
// @ts-ignore
// Con Larger
const esMayorLarger = math
    .larger(20, 30); // 20 = Primer valor a comparar => 20 > 30 ? true : false
console.log(esMayorLarger);

/* Menor Que */
// @ts-ignore
// Con Smaller
const esMenor = math
    .smaller(20, 30); // 20 = Primer valor a comparar => 20 > 30 ? true : false
console.log(esMenor);

/* Igual Que */
// @ts-ignore
// Con SmallerEq
const esIgual = math
    .equal(20, 30); // 20 = Primer valor a comparar => 20 == 30 ? true : false
console.log(esIgual);

/* Mayor o Igual Que */
// @ts-ignore
// Con SmallerEq
const esMayorIgual = math
    .largerEq(20, 30); // 20 = Primer valor a comparar => 20 >= 30 ? true : false
console.log(esMayorIgual);

/* Menor o Igual Que */
// @ts-ignore
// Con SmallerEq
const esMenorIgual = math
    .smallerEq(20, 30); // 20 = Primer valor a comparar => 20 <= 30 ? true : false
console.log(esMenorIgual);
