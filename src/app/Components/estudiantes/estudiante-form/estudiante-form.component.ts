import { CommonModule } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EstudianteService } from '../../../Services/estudiante.service';
import { Estudiante } from '../../../Models/estudiante';

@Component({
  selector: 'app-estudiante-form',
  standalone: true,
  imports: [ CommonModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule],
  templateUrl: './estudiante-form.component.html',
  styleUrl: './estudiante-form.component.css'
})
export class EstudianteFormComponent {
  form!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private estudianteService: EstudianteService,
    private dialogRef: MatDialogRef<EstudianteFormComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Estudiante | null
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nombre: [this.data?.nombre || '', Validators.required],
      apellido: [this.data?.apellido || '', Validators.required],
      cedula: [this.data?.cedula || '', Validators.required],
      gmail: [this.data?.gmail || '', [Validators.required, Validators.email]]
    });
  }

  guardar() {
    if (this.form.invalid) return;

    if (this.data) {
      const actualizado: Estudiante = { id: this.data.id, ...this.form.value };
      this.estudianteService.editar(this.data.id, actualizado)
        .subscribe(() => this.dialogRef.close(true));
    } else {
      this.estudianteService.agregar(this.form.value)
        .subscribe(() => this.dialogRef.close(true));
    }
  }
}