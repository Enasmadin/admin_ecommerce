import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShredModule } from '../shred/shred.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductesModule } from '../productes/productes.module';
import { ProductesComponent } from '../productes/compontes/productes/productes.component';



@NgModule({
  declarations: [
    CartComponent,

  ],
  imports: [
    CommonModule,
     RouterModule,
    BrowserModule,


    ProductesModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ProductesModule

  ]
})
export class CartModule { }
