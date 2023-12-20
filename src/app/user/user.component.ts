import { Component } from '@angular/core';
import { Validators, FormGroup, FormControl  } from '@angular/forms';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  username = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  userForm = new FormGroup({
    firstName: new FormControl({ value: 'Toto', disabled: true }, []),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern('[A-Za-z]*'),
    ]),
    address: new FormGroup({
      city: new FormControl('', [Validators.required]),
      street: new FormControl(''),
    })
    });
    testAdd1() {
      console.log(this.userForm.value);
      console.log(this.userForm.getRawValue());
    }
    get lastName(){return this.userForm.controls['lastName'];}
}
