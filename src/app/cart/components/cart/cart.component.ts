import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartservicesService } from '../../services/cartservices.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { ProducetService } from 'src/app/productes/model/producet.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:any[]=[];
  productes:any[] =[];
  detalies:any;
  newTaskForm!: FormGroup;
  constructor( private cartservice:CartservicesService, private fb: FormBuilder,  private productservic :ProducetService)
  {

  }

  ngOnInit(): void
   {
    this.getallcarts();

     this.newTaskForm= this.fb.group({
       start:[""],
       end:[""],

     })

   }


 getallcarts()
 {
  this.cartservice.getallcart().subscribe((res:any)=>{
    this.carts=res;

 })
  }

  applayfilter()
  {
    let data = this.newTaskForm.value;
    this.cartservice.getallcart(data).subscribe((res:any)=>{
    this.carts = res;
    console.log(this.carts) })

  }

   deletecart(id:number)
  {
     this.cartservice.deletecart(id).subscribe((res:any)=>{
      this.getallcarts()
       alert("delted is successfull")
     })
  }
  view( index:number)
  {
    this.detalies = this.carts[index];

    for(let x in this.detalies.products)
    {
       this.productes =[];
      this.productservic.getproducetbyid(this.detalies.products[x].productId).subscribe(res=>{
        this.productes.push({item:res , quantity:this.detalies.products[x].quantity});
         for(let x of this.productes)
         {
          console.log(x.item.id);
         }
      })

    }
  }





}
