import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './sign_in/sign_in.component';
import { SignupComponent } from './sign_up/sign_up.component';
import { ForgotpasswordComponent } from './forgot_password/forgot_password.component';

const routes = [
  {
    path: 'sign-in',
    component: SigninComponent
  },
  {
    path: 'sign-up',
    component: SignupComponent
  },
  {
    path: 'forgot-password',
    component: ForgotpasswordComponent
  },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    SigninComponent,
    SignupComponent
  ]
})
export class Auth1Module { }
