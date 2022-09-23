import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss']
})
export class SecondComponent implements OnInit {

  public inicial : number = 1;
  @Input () valor: number = 0;
  
  constructor() { }

  ngOnInit(): void {
  }


}
