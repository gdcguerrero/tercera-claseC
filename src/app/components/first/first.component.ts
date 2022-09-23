import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  public flag : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  clickBtn(){
    this.flag = !this.flag;
  }

  mouseEnter(){
    console.log("entro");
    
  }

  validation(event : any){
    console.log(event)
    console.log(event.target)
    console.log((event.target as HTMLInputElement).value)
    let replace = (event.target as HTMLInputElement).value.replace(/[^A-Za-zá-úÁ-Ú ]|[*÷×]/g,'')
    let number = (event.target as HTMLInputElement).value.replace(/[^0-9]|[*÷×]/g,'')
    console.log(number);
    (event.target as HTMLInputElement).value = number
  }
}
