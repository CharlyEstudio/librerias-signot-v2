// Cargar las funciones de MathJS

const number1: number = 20.34566;
const number2: number = 13.234234;

const redondear = (num: any, decimales: number = 2) => {
    const signo = (num >= 0 ? 1 : -1);
    num = num * signo;

    if (decimales === 0) signo * Math.round(num);

    num = num.toString().split('e');
    num = Math.round(+(num[0] + 'e' + (num[1] ? (num[1] + decimales) : decimales)));
    num = num.toString().split('e');

    return signo * Number((num[0] + 'e' + (num[1] ? (+num[1] - decimales) : -decimales)));
}

const Aritmetica = (() => {
    const operaciones: any = {
        sumar: (num: number[], decimales: number) => {
            let resp = 0;
            for (const n of num) {
                resp += n;
            }
            return redondear(resp, decimales);
        },
        restar: (num: number[], decimales: number) => {
            let resp = 0;
            for (let i in num) {
                if (Number(i) === 0) {
                    resp = num[i];
                } else {
                    resp -= num[i];
                }
            }
            return redondear(resp, decimales);
        },
        multiplicar: (num: number[], decimales: number) => {
            let resp = 0;
            for (let i in num) {
                if (Number(i) === 0) {
                    resp = num[i];
                } else {
                    resp *= num[i];
                }
            }
            return redondear(resp, decimales);
        },
        dividir: (num: number[], decimales: number) => {
            let resp = 0;
            for (let i in num) {
                if (Number(i) === 0) {
                    resp = num[i];
                } else {
                    resp /= num[i];
                }
            }
            return redondear(resp, decimales);
        },
        porcentaje: (num: number[], decimales: number) => {
            if (num.length > 2) {
                return 'Para obtener el porcentaje solo se necesitan 2 números';
            }

            return redondear((num[1] / num[0]), decimales);
        }
    }

    return {
        ejecutar: (comando: string, numeros: any, decimales: number = 2) => {
            if (!operaciones[comando]) {
                console.log('No existe la opetación.');
                return;
            }

            return operaciones[comando](numeros, decimales);
        }
    }
})();

const suma = Aritmetica.ejecutar('sumar', [number1, number2], 6);
const resta = Aritmetica.ejecutar('restar', [number1, number2], 6);
const multiplicar = Aritmetica.ejecutar('multiplicar', [number1, number2], 2);
const dividir = Aritmetica.ejecutar('dividir', [7.87355, number1, number2]);
const porcentaje = Aritmetica.ejecutar('porcentaje', [number1, number2], 6);
console.table({suma, resta, multiplicar, dividir, porcentaje});
