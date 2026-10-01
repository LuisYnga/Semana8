import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// 1. Agrega 'promedio' a las importaciones del store 👇
import { estudiantes, estado, promedio } from '../store'; 

@Component({
  selector: 'app-hola',
  imports: [CommonModule, RouterLink],
  templateUrl: './hola.html'
})
export class Hola {
  estudiantes = estudiantes;
  estado = estado;

  // 2. Ejecuta la función pasando tu lista de estudiantes y guárdala en una variable 👇
  promedioCreditos: number = promedio(this.estudiantes);
}

