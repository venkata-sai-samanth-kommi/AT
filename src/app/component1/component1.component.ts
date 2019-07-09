import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  @ViewChild('input',{static:true}) inp : ElementRef;
  valRecFromC2 : string ="";
  valToSend : string ="";
  constructor() { }

  ngOnInit() {
  }
  getVal(val:string)
  {
    this.valRecFromC2 = val;
  }
  sendToC2()
  {
    this.valToSend = this.inp.nativeElement.value;
  }
}
