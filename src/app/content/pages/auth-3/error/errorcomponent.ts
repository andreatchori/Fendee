import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  constructor(private router: Router) {}

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

  goToHome() {
    console.log('home');
  }


}
