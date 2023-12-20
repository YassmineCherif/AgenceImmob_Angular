import { Component } from '@angular/core';
import { ListToDo } from 'src/core/models/ListToDO';
import { CalculService } from '../services/calcul.service';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.css']
})
export class ToDoComponent {
  stat!:number;
tache:ListToDo[]=[
{id:1,title:"title1",completed:false},
{id:2,title:"title2",completed:true},
{id:3,title:"title3",completed:false}

]
constructor(private service:CalculService){
  this.stat=this.service.GetStat(this.tache,"completed",true)//bech yehseb kadeh min true

}
  }
