import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators,FormBuilder,ValidatorFn, AbstractControl } from '@angular/forms'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  profile: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  
  

  ngOnInit() {

    this.profile = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [this.patternValidator()]],
      confPassword: ['', [Validators.required]],
      mobileNo: ['', [Validators.required, Validators.pattern("[0-9]{10}")]]}, { validator: this.CrossFeildValidator });
  }


  CrossFeildValidator: ValidatorFn = (fg: FormGroup) => {

    var pass = fg.controls['password'].value;
    var confPass = fg.controls['confPassword'].value;
    return pass !== null && confPass !== null && pass === confPass
      ? null
      : { password: "mismatch" };
  };
  get confPassword() {
    return this.profile.get('confPassword')
  }
  get name() {
    return this.profile.get('name');
  }
  get email() {
    return this.profile.get('email');
  }
  get password() {
    return this.profile.get('password');
  }
  get mobileNo() {
    return this.profile.get('mobileNo');
  }

  show:boolean;
  onSubmit() {
    this.show=true;
  }
  
   patternValidator = function (): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      const pattern = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[@$!%*?&])[A-Za-z0-9@$!%*?&]{8,}$/;
      const value = control.value;
      if (value === '') {
        return { 'patternInvalid': false };
      } else {
        return pattern.test(value) ? null : { 'patternInvalid': false };
      }
    };
   }
  

}


