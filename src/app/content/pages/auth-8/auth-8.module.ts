import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninComponent } from './sign_in/sign_in.component';
import { SignupComponent } from './sign_up/sign_up.component';
import { ForgotpasswordComponent } from './forgot_password/forgot_password.component';
import { OtpComponent } from './otp/otp.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SwalService } from 'src/app/core/services/swal.service';
import { ErrorComponent } from './error/errorcomponent';

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
  {
    path: 'otp',
    component: OtpComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    NgbModule
  ],
  declarations: [
    SigninComponent,
    SignupComponent,
    ForgotpasswordComponent,
    OtpComponent,
    ErrorComponent
  ],
  providers: [
    SwalService
  ]
})
export class Auth8Module { }
