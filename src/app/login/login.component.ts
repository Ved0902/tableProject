import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private authServise: AuthService) {}

  ngOnInit(): void {}

  onClickLogIn(form: NgForm) {
    if (
      form.controls['userName'].value == 'Vedant@123' &&
      form.controls['Password'].value == 'Vedant@123'
    ) {
      this.router.navigateByUrl('/home');
      this.authServise.setFlag('true');
    } else {
      window.alert('please enter correct credentials');
    }
  }
}
