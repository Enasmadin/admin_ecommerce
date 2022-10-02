import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/components/cart/cart.component';
import { DetaliesproductetComponent } from './productes/compontes/detaliesproductet/detaliesproductet.component';
import { ProductesComponent } from './productes/compontes/productes/productes.component';

const routes: Routes = [

     { path:"producet" ,component:ProductesComponent},
     {path:"detail/id" ,component:DetaliesproductetComponent},
     { path:"cart" ,component:CartComponent},
     {path:"**",redirectTo:"cart",pathMatch:"full"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
