import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Sign_inComponent } from './sign_in/sign_in.component';
import { Sign_upComponent } from './sign_up/sign_up.component';

const routes = [
  {
    path: 'sign_in',
    component: Sign_inComponent
  },
  {
    path: 'sign_up',
    component: Sign_upComponent
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
