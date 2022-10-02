import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductesComponent } from './compontes/productes/productes.component';
import { DetaliesproductetComponent } from './compontes/detaliesproductet/detaliesproductet.component';
import { UniqueproduteComponent } from './compontes/uniqueprodute/uniqueprodute.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { SelectComponent } from '../shred/componentes/select/select.component';
import { ShredModule } from '../shred/shred.module';



@NgModule({
  declarations: [
    ProductesComponent,
    DetaliesproductetComponent,
    UniqueproduteComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    ShredModule,
    FormsModule,
    ReactiveFormsModule


  ]
})
export class ProductesModule { }
