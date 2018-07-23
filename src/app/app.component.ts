import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  score = 0;
  grade = 'F';

  onChange(){
    console.log('score:'+this.score)
    if(this.score > 80){
      this.grade = 'A';
    } else {
      this.grade = 'F';
    }
  }
}
