import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MustMatch } from 'src/app/core/helpers/must-match.validator';
import { SwalService } from 'src/app/core/services/swal.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign_up.component.html',
  styleUrls: ['./sign_up.component.scss']
})
export class SignupComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private swal: SwalService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  /**
   * @author André ATCHORI
   */

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.registerForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }
    // display form values on success
    this.swal.successAlert(JSON.stringify(this.registerForm.value, null, 4));
  }

  // tslint:disable-next-line:typedef
  sign_in() {
    this.router.navigateByUrl('/auth6/sign-in');
  }

}
