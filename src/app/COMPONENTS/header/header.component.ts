import { Router } from '@angular/router';
import { TokenStorageService } from './../../SERVICES/token-storage.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private tokenStorage: TokenStorageService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getUser() {
    return this.tokenStorage.getUser()?.firstName ?? null;
  }

  logOut(){
    this.tokenStorage.logOut();
    this.router.navigate(['']);
  }

}
