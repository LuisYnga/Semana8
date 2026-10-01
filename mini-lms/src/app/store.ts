// Estado compartido simple del Mini-LMS.
// En la Semana 9 lo formalizaremos como un servicio de Angular.
export interface Estudiante {
    nombre: string;
    creditos: number;
}
export const estudiantes: Estudiante[] = [
    { nombre: 'María Torres', creditos: 18 },
    { nombre: 'Luis Pérez', creditos: 8 },
    { nombre: 'Ana Ruiz', creditos: 14 }
];
// Misma regla de matrícula de la Unidad 1.
export function estado(creditos: number): string {
    if (creditos < 1 || creditos > 24) {
        return 'Créditos inválidos';
    } else if (creditos >= 12) {
        return 'Matriculado';
    }
    return 'Pendiente';
}

export function promedio(lista: Estudiante[]): number {
    let suma = 0;

    // Recorremos los estudiantes sumando sus créditos uno a uno
    for (let i = 0; i < lista.length; i++) {
        suma += lista[i].creditos;
    }

    // Dividimos la suma total entre la cantidad de estudiantes
    return suma / lista.length;
}