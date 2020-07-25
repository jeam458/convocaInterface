import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import {
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule, NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    NbDialogModule,
    NbPopoverModule,
    NbTabsetModule,
    NbTooltipModule,
    NbWindowModule,
    NbStepperModule,
    NbTreeGridModule,
  } from '@nebular/theme';
  import { FileSelectDirective } from 'ng2-file-upload';
  import { Ng2SmartTableModule } from 'ng2-smart-table';
  import { HttpModule } from '@angular/http';
  import { MaterialModule} from '../../app/material.module';
  import { NgxEchartsModule } from 'ngx-echarts';
  import { ThemeModule } from '../@theme/theme.module';
  import { AplicacionRoutingModule } from './aplicacion-routing.module';
  import { AplicacionComponents } from './aplicacion.component';
  import { HomeComponent} from './home/home.component';
  import { Busqueda1Component } from './busqueda1/busqueda1.component';
  import { MultasComponent} from './multas/multas.component';
  import { Multas1Component} from './multas1/multas1.component';
  import { AfectadosComponent} from './afectados/afectados.component';


  @NgModule({
      imports:[
        ThemeModule,
        NbInputModule,
        NbCardModule,
        NbButtonModule,
        NbActionsModule,
        NbUserModule,
        NbCheckboxModule,
        NbRadioModule,
        NbDatepickerModule,
        NbStepperModule,
        NbDialogModule.forChild(),
        NbWindowModule.forChild(),
        NbPopoverModule,
        NbTabsetModule,
        NbTooltipModule,
        AplicacionRoutingModule,
        NbSelectModule,
        NbIconModule,
        HttpModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SmartTableModule,
        NbTreeGridModule,
        MaterialModule,
        NgxEchartsModule
      ],
      declarations:[
          FileSelectDirective,
          AplicacionComponents,
          HomeComponent,
          Busqueda1Component,
          MultasComponent,
          Multas1Component,
          AfectadosComponent
      ],
      entryComponents:[
      ]
  })
  export class AplicacionModule{}
