import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Busqueda1Service {
  Cconexion="http://161.35.119.22:8000/consulta";
  body1={id:"001"};
  constructor(private http:Http,private httpClient: HttpClient) { }

  getActividades(){
    
    return this.http.get(this.Cconexion).map(res=>res.json())
  }
}
