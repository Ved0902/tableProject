import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isUserLoggesIn: boolean = false;
  constructor() {}

  setFlag(flag: string) {
    if (flag == 'true') {
      this.isUserLoggesIn = true;
    } else {
      this.isUserLoggesIn = false;
    }
  }
  getFlag() {
    return this.isUserLoggesIn;
  }
}
