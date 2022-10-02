import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './componentes/header/header.component';
import { SelectComponent } from './componentes/select/select.component';
import { SpinerComponent } from './componentes/spiner/spiner.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [
    HeaderComponent,
    SelectComponent,
    SpinerComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    BrowserModule



  ],
  exports:[
    HeaderComponent,
    SelectComponent,
    ReactiveFormsModule,
    RouterModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,

  ]
})
export class ShredModule { }
