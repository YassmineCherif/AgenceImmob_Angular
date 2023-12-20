import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-appartement',
  templateUrl: './details-appartement.component.html',
  styleUrls: ['./details-appartement.component.css']
})
export class DetailsAppartementComponent implements OnInit{
 id:number=0;
  constructor (private _activatedRoure:ActivatedRoute){}
    ngOnInit ():void 
    {console.log(this._activatedRoure);
      // on va recuperer l'id grace a activatedroute
      this.id = Number(this._activatedRoure.snapshot.paramMap.get('id'));//les point sont le path qu'on a suivi dans bouton droite>inspecter>console>snapshot....
    }
  }


