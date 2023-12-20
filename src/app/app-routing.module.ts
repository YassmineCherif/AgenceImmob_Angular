import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResidencesComponent } from './residences/residences.component';
import { HeaderComponent } from './header/header.component.spec';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsAppartementComponent } from './details-appartement/details-appartement.component';
import { AppartementComponent } from './appartement/appartement.component';
import { UserComponent } from './user/user.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { EnseignantComponent } from './enseignant/enseignant.component';

const routes : Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Residence',component: ResidencesComponent },
  {path: 'Header',component: HeaderComponent },
  {path: 'FormResidence', component:FormResidenceComponent  },
  {path:'appartement/:id',component:DetailsAppartementComponent},
  {path:'Residence/:id',component:AppartementComponent},
  {path:'user',component:UserComponent},
  {path:'etudiant',component:EtudiantComponent},
  {path:'enseignant',component:EnseignantComponent},
 


  {path:'**',component:NotFoundComponent}//lezm ekher path thotou

 
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
