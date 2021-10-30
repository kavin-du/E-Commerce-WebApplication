import { MatSnackBar } from '@angular/material/snack-bar';
import { TokenStorageService } from './../../SERVICES/token-storage.service';
import { AuthService } from './../../SERVICES/auth.service';
import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginFormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  hidePassword = true;
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService, 
    private tokenStorage: TokenStorageService,
    private _snackBar: MatSnackBar,
    private router: Router,
  ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles; //! check this
    }
  }

  clearForm(): void {
    this.loginFormGroup.reset();
    // Object.keys(this.loginFormGroup.controls)
    // .forEach(key => {
    //   this.loginFormGroup.get(key)?.setErrors(null);
    // });
  }

  onSubmit(): void {
    
    this.authService.login(
      this.loginFormGroup.controls.email.value, 
      this.loginFormGroup.controls.password.value, 
    ).subscribe(
      data => {
        // console.log(data);
        
        this.tokenStorage.saveToken(data.token); //! check this
        this.tokenStorage.saveUser(data.data); // ! check this

        this.isLoginFailed = false;
        this.isLoggedIn = true;

        this.roles = this.tokenStorage.getUser().roles; // !! 
        // this.reloadPage();
        console.log(this.tokenStorage.getToken());
        console.log(this.roles);
        console.log(this.tokenStorage.getUser());
        if(this.roles[0] = 'owner') {
          this.router.navigate(['/admin']);
        } else {
          this.router.navigate(['']);
        }
      },
      err => {
        console.log(err);
        
        this.errorMessage =err?.error?.errors;
        this.isLoginFailed = true;
        
        console.log(this.isLoginFailed);
        console.log(this.errorMessage);
        this._snackBar.open(this.errorMessage, 'Close');
        
      }
    );
  }

  // reloadPage(): void {
  //   window.location.reload(); // ! why this
  // }

}
