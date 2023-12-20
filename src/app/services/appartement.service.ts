import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Apartment } from 'src/core/models/appartement';
@Injectable({
  providedIn: 'root'
})
export class AppartementService {

  url:string ='http://localhost:3000/appartement';
  //ListAppartement:Apartment[]=[];

  constructor(private http:HttpClient ) { }



  getAppartementList():Observable<Apartment[]>{
    return this.http.get<Apartment[]>(this.url);
    }

}
