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
  constructor(private _router: Router, private _splashScreenService: SplashScreenService
    , private _loader: LoadingBarService) {
  }

  ngOnInit()
  {
      this._router.events.subscribe(event => {
          if (event instanceof NavigationStart) {
              // set page progress bar loading to start on NavigationStart event router
              this._loader.start();
          }
          if (event instanceof RouteConfigLoadStart) {
              this._loader.increment(35);
          }
          if (event instanceof RouteConfigLoadEnd) {
              this._loader.increment(75);
          }
          if (event instanceof NavigationEnd || event instanceof NavigationCancel) {
              // set page progress bar loading to end on NavigationEnd event router
              this._loader.complete();
          }
      });
  }

  ngAfterViewInit(): void {
    this._splashScreenService.init();
  }
}
