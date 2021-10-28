import { DataService } from './../../SERVICES/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  content?: string;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getAdminBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err);
      }
    );
  }

}
