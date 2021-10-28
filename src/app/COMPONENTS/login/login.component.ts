import { TokenStorageService } from './../../SERVICES/token-storage.service';
import { AuthService } from './../../SERVICES/auth.service';
import { Component, OnInit } from '@angular/core';
import { collapseTextChangeRangesAcrossMultipleVersions } from 'typescript';

type loginFormType = {
  email: string,
  password: string,
};

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: loginFormType = {
    email: 'null2',
    password: 'null2'
  }

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

  onSubmit(): void {
    const { email, password } = this.loginForm;

    this.authService.login(email, password).subscribe(
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
