import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignupComponent } from './sign_up/sign_up.component';
import { SigninComponent } from './sign_in/sign_in.component';

const routes = [
  {
    path: 'sign_in',
    component: SigninComponent
  },
  {
    path: 'sign_up',
    component: SignupComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: []
})
export class Auth1Module { }
