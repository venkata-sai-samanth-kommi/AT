import { Component, OnInit,  Output, EventEmitter, Input, ViewChild, ElementRef} from '@angular/core';


@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  @ViewChild('comp2input',{static : true}) comp2input :ElementRef;

  @Input() valueFromC1 :string = "";
  
  @Output() EmitterToC1 = new EventEmitter<string>();

  comp2input2way : string ="";
  comp2inputvaluethroughViewChild: string ="default value to prove this is not 2 way";

  constructor() { }

  ngOnInit() {
  
  }

  emitToC1()
  {
    this.EmitterToC1.emit(this.comp2input2way);
  }
  changeViewChildVal()
  {
    this.comp2inputvaluethroughViewChild = this.comp2input.nativeElement.value;
  
  }
}
