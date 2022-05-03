
/*
    ===== Código de TypeScript =====
*/

import { NumberLiteralType } from "typescript";

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar( numero: number, otroNumero?: number, base: number = 2 ): number {
    return numero * base
}

/*const resultado = multiplicar(5, 10);

console.log(resultado); */

interface PersonajeWIZARD {
    nombre: string;
    pv: number;
    mostrarHp: () => void;
}


function curar(personaje: PersonajeWIZARD, curarX: number): void {

    personaje.pv += curarX;
}

const nuevoPersonaje: PersonajeWIZARD = {
    nombre: 'Cazuela',
    pv: 500,
    mostrarHp() {
        console.log( 'Puntos de vida:', this.pv);
    }
}

curar( nuevoPersonaje, 100);

nuevoPersonaje.mostrarHp();

