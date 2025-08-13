import { Routes } from '@angular/router';
import { EgresosComponent } from './Components/egresos/egresos.component';
import { EstudianteFormComponent } from './Components/estudiantes/estudiante-form/estudiante-form.component';
import { EstudiatelistComponent } from './Components/estudiantes/estudiatelist/estudiatelist.component';


export const routes: Routes = [

  { path: 'egresos', component: EgresosComponent },
   { path: 'estudiantes', component: EstudiatelistComponent },
];
