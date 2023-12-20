import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enseignant',
  templateUrl: './enseignant.component.html',
  styleUrls: ['./enseignant.component.css']
})
export class EnseignantComponent  implements OnInit{
  question!:string;
  reponseE !:string;
  r!:string;
   msg!:string;
  constructor(){}
  ngOnInit():void{
  this.question="vous avez travailler le workshop?";
  this.reponseE="oui";}
  correction(r:string)
  {if(this.reponseE===r)
    {this.msg="ok";}
      else { this.msg="notOk"}}
  
}
