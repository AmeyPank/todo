import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todo List With Angular';
list: any []=[];
  // constructor(){
  //   setTimeout(() => {
  //     this.title="Changed title";
  //   },2000);
  addTask(item:string){
    
    this.list.push({id:this.list.length,name:item})
    console.warn(this.list)
}
removeTask(id:number)
{
    console.warn(id)
    this.list=this.list.filter((item: { id: number; })=>{
      return item.id !== id;
    });
}

}

