import { Component, OnInit } from '@angular/core';
import { UserslistService } from 'src/app/userslist.service';


@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  constructor(private userslistService: UserslistService) { }

  onLogout(){
    this.userslistService.logout();
  }
  ngOnInit(): void {
  }

}
