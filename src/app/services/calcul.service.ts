import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculService {

  constructor() { }
  GetStat(list:any[],critere:string,value:any){
    let n=0;
    for (let i in list){
      if (list[i][critere]=== value)//pour l'acces au critere
    n++;
    }
    return n;
  }
}
