import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
    MatAutocompleteModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
} from "@angular/material";


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatAutocompleteModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
  ]
})
export class MaterialModule { }