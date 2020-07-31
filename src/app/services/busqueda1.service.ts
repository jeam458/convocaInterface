import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { JsonPipe } from '@angular/common';


@Injectable({
  providedIn: 'root'
})
export class Busqueda1Service {
  Cconexion="http://localhost:3000/";
  
  constructor(private http:Http,private httpClient: HttpClient) { }

  getActividades(){
    return this.httpClient.get(this.Cconexion+"actividad");   
  }
  getEmpresas(){
    return this.httpClient.get(this.Cconexion+"empresas");
  }
  getRegiones(){
    return this.httpClient.get(this.Cconexion+"region");
  }
  getAnios(){
    return this.httpClient.get(this.Cconexion+"anio");
  }
}
