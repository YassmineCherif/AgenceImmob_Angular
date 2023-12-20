import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResidencesComponent } from './residences/residences.component';
import { HomeComponent } from './home/home.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DetailsAppartementComponent } from './details-appartement/details-appartement.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormAppartementComponent } from './form-appartement/form-appartement.component';
import { UserComponent } from './user/user.component';
import { EnseignantComponent } from './enseignant/enseignant.component';
import { EtudiantComponent } from './etudiant/etudiant.component';
import { ToDoComponent } from './to-do/to-do.component';

@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    HomeComponent,
    FormResidenceComponent,
    NotFoundComponent,
    DetailsAppartementComponent,
    AppartementComponent,
    FormAppartementComponent,
    UserComponent,
    EnseignantComponent,
    EtudiantComponent,
    ToDoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
