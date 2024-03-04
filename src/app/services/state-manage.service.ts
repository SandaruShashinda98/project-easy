import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class StateManageService {
  private loggedUserData = new BehaviorSubject<any>(null);
  loggedUserData$ = this.loggedUserData.asObservable();

  constructor() {
    const storedData = localStorage.getItem('loggedUserData');
    if (storedData) {
      this.loggedUserData.next(JSON.parse(storedData));
    }
  }

  setLoggedUserData(loggedUserData: User | null) {
    this.loggedUserData.next(loggedUserData);
    localStorage.setItem('loggedUserData', JSON.stringify(loggedUserData));
  }
}
