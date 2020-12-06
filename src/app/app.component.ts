import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NavigationCancel, NavigationEnd, NavigationStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router } from '@angular/router';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { SplashScreenService } from './core/services/splash-screen.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'AngularUIAuthentication';
  constructor(private router: Router, private splashScreenService: SplashScreenService
    ,         private loader: LoadingBarService) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit()
  {
      this.router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              // set page progress bar loading to start on NavigationStart event router
              this.loader.start();
          }
          if (event instanceof RouteConfigLoadStart) {
              this.loader.increment(35);
          }
          if (event instanceof RouteConfigLoadEnd) {
              this.loader.increment(75);
          }
          if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
              // set page progress bar loading to end on NavigationEnd event router
              this.loader.complete();
          }
      });
  }

  ngAfterViewInit(): void {
    this.splashScreenService.init();
  }
}
