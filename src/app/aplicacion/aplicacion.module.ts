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

  import { ThemeModule } from '../@theme/theme.module';
  import { AplicacionRoutingModule } from './aplicacion-routing.module';
  import { AplicacionComponents } from './aplicacion.component';
  import { HomeComponent} from './home/home.component';


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
      ],
      declarations:[
          FileSelectDirective,
          AplicacionComponents,
          HomeComponent,
      ],
      entryComponents:[
      ]
  })
  export class AplicacionModule{}
