
/*
    ===== Código de TypeScript =====
*/

let habilidades: string [] = ['Bash', 'Counter', 'Healing'];

interface personaje {
    nombre: string;
    hp: number;
    habilidades: string[]
    puebloNatal?: string;
}

const personaje: personaje = {
    nombre: 'Cazuela',
    hp: 1000,
    habilidades: ['Bash', 'Counter', 'Healing']
}

personaje.puebloNatal = 'verdansk';

console.table( personaje );

