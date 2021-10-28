import { TokenStorageService } from './../../SERVICES/token-storage.service';
import { AuthService } from './../../SERVICES/auth.service';
import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';
import { FormControl, FormGroup, Validators } from '@angular/forms';


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
    private tokenStorage: TokenStorageService
  ) { }

  ngOnInit(): void {
    if(this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles; //! check this
    }
  }

  clearForm(): void {
    this.loginFormGroup.reset();
    Object.keys(this.loginFormGroup.controls)
    .forEach(key => {
      this.loginFormGroup.get(key)?.setErrors(null);
    });
        
  }

  onSubmit(): void {

    this.authService.login(
      this.loginFormGroup.controls.email.value, 
      this.loginFormGroup.controls.password.value, 
    ).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken); //! check this
        this.tokenStorage.saveUser(data); // ! check this

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles; // !! 
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message; // !!
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload(); // ! why this
  }

}
