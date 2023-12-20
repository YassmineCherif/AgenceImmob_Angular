import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppartementService } from '../services/appartement.service';
import { Apartment } from 'src/core/models/appartement';

@Component({
  selector: 'app-appartement',
  templateUrl: './appartement.component.html',
  styleUrls: ['./appartement.component.css']
})
export class AppartementComponent {
  /*constructor(private router: Router) { }
  listApartByResidence:Apartment[]=[];

  navigateToDetails(appartement: Apartment) {
    // Naviguer vers la page de détails de l'appartement
    this.router.navigate(['/DetailsAppartementComponent', appartement.id]);
  }*/

  ListAppartement:Apartment[]=[];
  constructor(private service:AppartementService){

   // this.service.getAppartementList().subscribe({next:(res)=>this.ListAppartement});
   
    this.service.getAppartementList().subscribe({next:data => console.log(data)});

    // console.log(this.res);
  }

}
