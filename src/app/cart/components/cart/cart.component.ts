import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CartservicesService } from '../../services/cartservices.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  carts:any[]=[];
  newTaskForm!: FormGroup;
  constructor( private cartservice:CartservicesService, private fb: FormBuilder)
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





}
