import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  //Interpolation dataBinding
property1="Bonjour";
methodeA(){return 2;}
//Properting binding dataBinding
property2:boolean=false;
//Event binding  dataBinding
msg:string='';
methodeB()
{ 
this.msg='EventBinding';
}
//two way data binding 
property3="Recherche";


}
