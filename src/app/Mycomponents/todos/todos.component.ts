import { Component } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
title: any;
list:any[]=[]
  length: any;
addTask(item:string){
      console.warn(item);
      this.list.push({id:this.length,name:item})
  }
  removeTask(id:number)
  {
      console.warn(id)
      this.list=this.list.filter(item=>item.id!==id);
  }

}
