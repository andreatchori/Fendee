import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SwalService } from 'src/app/core/services/swal.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.scss']
})
export class OtpComponent implements OnInit {
  otpForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private router: Router, private swal: SwalService) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.otpForm = this.formBuilder.group({
      code: ['', Validators.required]
    });
  }

  /**
   * @author André ATCHORI
   */

  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.otpForm.controls; }

  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.otpForm.invalid) {
      return;
    }
    // display form values on success
    this.swal.successAlert(JSON.stringify(this.otpForm.value, null, 4));
  }

  // tslint:disable-next-line:typedef
  resend_code() {
    this.router.navigateByUrl('/auth7/sign-in');
  }

}
