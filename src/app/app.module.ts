import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { ProductesModule } from './productes/productes.module';
import { HeaderComponent } from './shred/componentes/header/header.component';
import { ShredModule } from './shred/shred.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
     ShredModule,
     ProductesModule,
     CartModule,
     RouterModule,

    BrowserModule,
    
    FormsModule,
  ReactiveFormsModule



  ],
  exports:[],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
