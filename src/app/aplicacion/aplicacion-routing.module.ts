import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AplicacionComponents} from './aplicacion.component'
import { HomeComponent} from './home/home.component';


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
