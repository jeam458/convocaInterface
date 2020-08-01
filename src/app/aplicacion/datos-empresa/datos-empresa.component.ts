import { Component, OnInit } from '@angular/core';
import { NbThemeService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Busqueda1Service} from '../../services/busqueda1.service';

@Component({
  selector: 'ngx-datos-empresa',
  templateUrl: './datos-empresa.component.html',
  styleUrls: ['./datos-empresa.component.scss']
})
export class DatosEmpresaComponent implements OnInit {
  actEconomicas:any;
  empresas:any;
  regiones:any;
  anios:any;
  firstForm: FormGroup;
  constructor(private theme: NbThemeService,
              private busquedaService:Busqueda1Service,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.getActividades();
    this.getEmpresas();
    this.getRegiones();
    this.inicializarForm();
  }

  inicializarForm(){
    this.firstForm= this.fb.group({
      actividad:['',Validators.required],
      empresa:['',Validators.required],
      region:[''],
      anio:['']
    })
  }

  limpiarFiltros(){
    this.firstForm.reset();
  }

  getActividades(){
    this.busquedaService.getActividades().subscribe(res=>{
      this.actEconomicas=res;
      //console.log(res);
    })
  }
  getEmpresas(){
    this.busquedaService.getEmpresas().subscribe(data=>{
      //console.log(data)
      this.empresas=data;
    })
  }
  getRegiones(){
    this.busquedaService.getRegiones().subscribe(data=>{
      //console.log(data)
      this.regiones=data;
    })
  }
  getAnios(){
    this.busquedaService.getAnios().subscribe(data=>{
      this.anios=data
    })
  }

}
