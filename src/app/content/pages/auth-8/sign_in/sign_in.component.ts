import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/core/services/swal.service';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign_in.component.html',
  styleUrls: ['./sign_in.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private swal: SwalService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: ['', false]
    });
  }

  /**
   * @author André ATCHORI
   */

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    // display form values on success
    this.swal.successAlert(JSON.stringify(this.loginForm.value, null, 4));
  }

  // tslint:disable-next-line:typedef
  sign_up() {
    this.router.navigateByUrl('/auth8/sign-up');
  }

  // tslint:disable-next-line:typedef
  forgot_password() {
    this.router.navigateByUrl('/auth8/forgot-password');
  }

}
