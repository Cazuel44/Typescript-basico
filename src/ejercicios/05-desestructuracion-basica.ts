
/*
    ===== Código de TypeScript =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles
}

interface Detalles {
    autor: string;
    fecha: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36,
    cancion: 'mess',
    detalles: {
        autor: 'Ed Sheeran',
        fecha: 2015
    }
}

const { volumen: vol, segundo, cancion, detalles} = reproductor;
const { autor } = detalles

//console.log('el volumen actual es de: ', vol)
//console.log('el segundo actual es de: ', segundo)
//console.log('la cancion actual es de: ', cancion)
//console.log('el autor actual es de: ', autor)

// para desestructurar arreglo se usa [] y para objetos {}

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const[ , , p3 ] = dbz;

//console.log('Personaje 1', p1);
//console.log('Personaje 2', p2);
console.log('Personaje 3', p3);