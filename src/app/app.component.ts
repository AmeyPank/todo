import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo-List With Angular';
  // constructor(){
  //   setTimeout(() => {
  //     this.title="Changed title";
  //   },2000);
addTask(item:string){
console.warn(item);
}
}

