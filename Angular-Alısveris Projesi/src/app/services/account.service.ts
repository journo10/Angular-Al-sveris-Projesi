import { User } from './../login/user';
import { Injectable } from '@angular/core';

@Injectable()
export class AccountService {
  constructor() {}

  loggedIn = false;
  login(user: User): boolean {
    if (user.userName == 'akif' && user.password == '12345') {
      this.loggedIn = true;
      localStorage.setItem('isLogged', user.userName);
      return true;
    }
    return false;
  }

  isLoggedIn() {
    return this.loggedIn;
  }

  logOut(){
    localStorage.removeItem('isLogged');
    this.loggedIn = false;
  }
}
