import { AuthService } from './../../SERVICES/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';

// type RegisterFormType = {
//   firstName: string,
//   lastName: string,
//   email: string,
//   password: string,
//   address: string,
//   mobile: string,
// };


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  
  // form: RegisterFormType = {
  //   firstName: '',
  //   lastName: '',
  //   email: '',
  //   password: '',
  //   address: '',
  //   mobile: '',
  // }

  registerFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  });

  hidePassword1 = true;
  hidePassword2 = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private AuthService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // const { firstName, lastName, email, password, address, mobile } = this.form;
    console.log(this.registerFormGroup.value);
    this.AuthService.customerRegister(
      this.registerFormGroup.controls.firstName.value, 
      this.registerFormGroup.controls.lastName.value, 
      this.registerFormGroup.controls.email.value, 
      this.registerFormGroup.controls.password.value, 
      this.registerFormGroup.controls.address.value, 
      this.registerFormGroup.controls.mobile.value).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = 'this is the error '+err.error;
        this.isSignUpFailed = true;        
      }
    );
  }

}
