import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot_password.component.html',
  styleUrls: ['./forgot_password.component.scss']
})
export class ForgotpasswordComponent implements OnInit {
  resetForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.resetForm = this.formBuilder.group({
      resetField: ['', Validators.required]
    });
  }

  /**
   * @author André ATCHORI
   */

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.resetForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.resetForm.invalid) {
      return;
    }
    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.resetForm.value, null, 4));
  }

  // tslint:disable-next-line:typedef
  sign_in() {
    this.router.navigateByUrl('/auth1/sign-in');
  }

}
