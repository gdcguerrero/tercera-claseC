import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.component.html',
  styleUrls: ['./three.component.scss']
})
export class ThreeComponent implements OnInit {

  @Output() salida : EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

  onClick(){
    this.salida.emit(1)
  }
  onClickRes(){
    this.salida.emit(-1)
  }

  increment(event : any){
    console.log(event);
  }


}
