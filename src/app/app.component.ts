import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'tercera-claseC';

  public valor : number=0;

  increment(event: any){
    this.valor += event;
  }

}
