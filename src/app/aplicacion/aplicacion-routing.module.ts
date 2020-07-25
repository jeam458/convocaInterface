import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacionComponents} from './aplicacion.component'
import { HomeComponent} from './home/home.component';
import { Busqueda1Component} from './busqueda1/busqueda1.component';
import { MultasComponent} from './multas/multas.component';
import { Multas1Component} from './multas1/multas1.component';
import { AfectadosComponent} from './afectados/afectados.component';


const routes:Routes = [
    {
        path:'',
    component: AplicacionComponents,
    children:[
        {
            path:'',
            redirectTo:'home'
        },
        {
            path:'home',
            component:HomeComponent
        },
        {
            path:'busqueda1',
            component:Busqueda1Component
        },
        {
            path:'multas',
            component:MultasComponent
        },
        {
            path:'multas1',
            component:Multas1Component
        },
        {
            path:'afectados',
            component:AfectadosComponent
        }
    ]
    }
]

@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AplicacionRoutingModule{

}
