import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ShredModule } from '../shred/shred.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent,

  ],
  imports: [
    CommonModule,
     RouterModule,
   
    BrowserModule,



    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ]
})
export class CartModule { }
