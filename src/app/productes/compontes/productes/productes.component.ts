import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Producet } from '../../model/producet';
import { ProducetService } from '../../model/producet.service';

@Component({
  selector: 'app-productes',
  templateUrl: './productes.component.html',
  styleUrls: ['./productes.component.css']
})
export class ProductesComponent implements OnInit {
  productes:any[]=[];
   catogary: any[]=[];
  addproduct: any[] =[];
  base64:any='';
  form!:FormGroup ;
  constructor( private service:ProducetService , private fb:FormBuilder) {

   }

  ngOnInit(): void {
    this.getproductes();
    this.getcatogray();
    this.form = this.fb.group({
      title:['',[Validators.required]],
      price:['' ,[Validators.required]],
      category:['',[Validators.required]],
      description:['' ,[Validators.required]],
      image:['',[Validators.required]],
    })
  }
  getproductes()
   {
    this.service.getallproductes().subscribe((res:any)=>
    {
        this.productes=res;
    }, Error =>{
      alert("error");
    }

    )}
  getcatogray()
  {

    this.service.getallcatogary().subscribe((res:any)=>{
      this.catogary=res;
    },Error=>{
      alert('error')
    })
  }
  filtercatogery(event:any)
  {

    // let value = event.target.value;
    //  console.log(value);
    // (value=="all")? this.service.getallproductes : this.getproducetcatogary(value);
    this.form.get('category')?.setValue(event.target.value);
    console.log(this.form);


  }
  getproducetcatogary(keyword:string)
  {

    this.service.getprodbycatogary(keyword).subscribe((res:any)=>{
       this.productes=res;

      console.log(this.productes)
    })
  }
  getimagepath( event:any)
  {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
       this.base64= reader.result;
       this.form.get('image')?.setValue(this.base64);
       console.log(this.base64);

    };
  }

  makeproduet()
  {
    const model = this.form.value;
    this.service.createproductes(model).subscribe( (res:any) =>{

         alert("add is successful ");
      }
    )
  }
  updata(item:any)
  {
    this.form.patchValue(
      {
        title:item.title,
        price:item.price,
        image:item.image,
        category: item.category,
        description:item.description,

      }

    )
    this.base64=item.image;
  }
}
