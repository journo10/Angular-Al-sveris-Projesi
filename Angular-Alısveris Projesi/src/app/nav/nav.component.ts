import { AccountService } from './../services/account.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  constructor(private accountService: AccountService) {}

  ngOnInit(): void {}

  isLoggedin() {
    return this.accountService.isLoggedIn();
  }

  logOut(){
    return this.accountService.logOut();
  }
}
