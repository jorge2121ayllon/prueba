import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Egreso } from '../../Models/egreso';
import { EgresosService } from '../../Services/egresos.service';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

//angular material


@Component({
  selector: 'app-egresos',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatCardModule],
  templateUrl: './egresos.component.html',
  styleUrl: './egresos.component.css'
})
export class EgresosComponent {
 
  egresos: Egreso[] = [];
  displayedColumns: string[] = ['nombre', 'costo', 'fecha', 'descripcion',
     'usuario', 'erased', 'registrado'];


  constructor(private egresoService: EgresosService) {
console.log("entrooo")

    this.egresoService.getEgresos().subscribe({
      
      next: (data) => {
          this.egresos = data;
         
      } ,
      error: err => console.error('Error al obtener egresos:', err)
    });
  }
}