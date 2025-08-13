import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Egreso } from '../Models/egreso';


@Injectable({
  providedIn: 'root'
})
export class EgresosService {
private apiUrl = 'https://localhost:7211/api/Egresos'; // Ajusta la URL según tu API
  constructor(private http: HttpClient) {

    
   }

   getEgresos(): Observable<Egreso[]> {
    return this.http.get<Egreso[]>(this.apiUrl);
  }
}
