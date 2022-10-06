import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  constructor() { }
  @Input() title:string="";
  @Input()  data:any[]=[];
  @Output() selectnative = new EventEmitter();
  @Input()  all: boolean= true;
  @Input()  select:any='';


  ngOnInit(): void {
  }
  datactchanges(event:any)
  {
     this.selectnative.emit(event);
  }

}
