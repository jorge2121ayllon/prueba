import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { Estudiante } from '../../../Models/estudiante';
import { EstudianteService } from '../../../Services/estudiante.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatIcon } from '@angular/material/icon';
import { EstudianteFormComponent } from '../estudiante-form/estudiante-form.component';

@Component({
  selector: 'app-estudiatelist',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule,MatDialogModule,MatIcon],
  templateUrl: './estudiatelist.component.html',
  styleUrl: './estudiatelist.component.css'
})
export class EstudiatelistComponent {
estudiantes: Estudiante[] = [];
  columnas: string[] = ['nombre', 'apellido', 'cedula', 'gmail', 'acciones'];

  constructor(
    private estudianteService: EstudianteService,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.cargarDatos();
  }

  cargarDatos() {
    this.estudianteService.listar().subscribe(data => this.estudiantes = data);
  }

  abrirFormulario(estudiante?: Estudiante) {
    const dialogRef = this.dialog.open(EstudianteFormComponent, {
      width: '400px',
      data: estudiante ? { estudiante } : null
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.cargarDatos();
      }
    });
  }

  eliminar(id: number) {
    if (confirm('¿Seguro que deseas eliminar este estudiante?')) {
      this.estudianteService.eliminar(id).subscribe(() => this.cargarDatos());
    }
  }
}