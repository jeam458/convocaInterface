import { Component } from '@angular/core';

@Component({
    selector:'aplicacion-elements',
    template: `
    <ngx-one-column-layout>
    <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `,
})
export class AplicacionComponents{}