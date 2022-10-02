import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producet } from '../../model/producet';

@Component({
  selector: 'app-uniqueprodute',
  templateUrl: './uniqueprodute.component.html',
  styleUrls: ['./uniqueprodute.component.css']
})
export class UniqueproduteComponent implements OnInit {
  @Input() data!:Producet
  @Output() item  =  new EventEmitter();
  addbutton:boolean=false;
  amount:number=0;
  constructor() { }

  ngOnInit(): void
   {
    }

  add()
  {
    this.item.emit({item:this.data  , quantity: this.amount});

  }

}
