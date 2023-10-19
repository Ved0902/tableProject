import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { MaterialModule } from '../material.module';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: LoginComponent }];

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule,
    FormsModule,
  ],
  exports: [RouterModule],
})
export class LoginModule {
  constructor() {
    console.log('login Component loaded');
  }
}
