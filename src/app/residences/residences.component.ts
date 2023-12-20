import { Component } from '@angular/core';
import { Apartment } from 'src/core/models/appartement';
import { Residence } from 'src/core/models/residence';

@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/R1.jpg"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/R2.jpg"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/R3.jpg"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/R4.jpg"}
    ];
    listApartments:Apartment[]=[
      {id:1,"appartNum":1,"floorNum":0,"surface":100,"terrace":"oui","surfaceTerrace":20,"residence":this.listResidences[0],"category":"S+1","description":"AppartementS+1" },
      {id:2,"appartNum":2,"floorNum":0,"surface":130,"terrace":"non","surfaceTerrace":0,"category":"S+2","residence":this.listResidences[0],"description":"AppartementS+2" },
      {id:3,"appartNum":3,"floorNum":0,"surface":150,"terrace":"oui","surfaceTerrace":30,"category":"S+3","residence":this.listResidences[1] ,"description":"AppartementS+3"}
    ];
    hide :boolean=true;
    listApartByResidence:Apartment[]=[];
    listFavoris:Apartment[]=[];
    searchText:string = "";
    
    //details apartement de residence specifique
    showApartments(id:number){
      this.hide=false;
      this.listApartByResidence=this.listApartments.filter(
      (appart: Apartment)=>appart.residence.id=== id
      );
      }
      //ajouter dans liste favoris lorsque vous likez un appartement

  likeapartment(appartement: Apartment) {
    this.listFavoris.push(appartement);
    console.log(this.listFavoris);
  }
 
    //recherche 
   filterBySurface(){
     this.listApartByResidence=this.listApartments.filter(
    (appart: Apartment)=>appart.surface === Number(this.searchText));
   }
    
    
}
