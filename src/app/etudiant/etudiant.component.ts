import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-etudiant',
  templateUrl: './etudiant.component.html',
  styleUrls: ['./etudiant.component.css']
})
export class EtudiantComponent {
  etudiantForm = new FormGroup({
    cin: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(8),
      Validators.pattern('[A-Za-z0-9]*')


    ]),
    Reponse: new FormControl('', [Validators.required])
  });
  testAdd1() {
    console.log(this.etudiantForm.value);
    console.log(this.etudiantForm.getRawValue());
  }
  get cin(){return this.etudiantForm.controls['cin'];}
  get Reponse(){return this.etudiantForm.controls['Reponse'];}
@Input() questionE !:String;
@Output() reponseFinale= new EventEmitter<string>();
reponseE !:string;
envoiR(){
  this.reponseFinale.emit(this.reponseE);
}
}
 

