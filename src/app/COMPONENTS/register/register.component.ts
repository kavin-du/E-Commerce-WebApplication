import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from './../../SERVICES/auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, Validators, FormGroup, ValidatorFn, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerFormGroup = new FormGroup({
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    passwordConfirm: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    mobile: new FormControl('', [Validators.required]),
  }, { validators: passwordConfirmValidator });

  hidePassword1 = true;
  hidePassword2 = true;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(
    private AuthService: AuthService, 
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }


  clearForm(): void {
    this.registerFormGroup.reset();
    // Object.keys(this.registerFormGroup.controls)
    // .forEach(key => {
    //   this.registerFormGroup.get(key)?.setErrors(null);
    // });
        
  }

  onSubmit(): void {
    console.log(this.registerFormGroup.value);
    this.AuthService.customerRegister(
      this.registerFormGroup.controls.firstName.value, 
      this.registerFormGroup.controls.lastName.value, 
      this.registerFormGroup.controls.email.value, 
      this.registerFormGroup.controls.password.value, 
      this.registerFormGroup.controls.address.value, 
      this.registerFormGroup.controls.mobile.value).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage =err?.error?.errors?.join('\n');
        this.isSignUpFailed = true;     
        console.log(err);
           
        this._snackBar.open(this.errorMessage, 'Close');
      }
    );
  }

}

export function passwordConfirmValidator(control: AbstractControl): { [key: string]: boolean} | null{
  // console.log(control.errors);
  
  if (control.get('password')?.value && control.get('passwordConfirm')?.value && (control.get('password')?.value == control.get('passwordConfirm')?.value)) {
    
    // console.log('pass match');
    return null;
  }
  // console.log('do not match');
  return {'passwordsNotMatch': true};
  
}
