import { Inject, Injectable } from '@angular/core';
import { animate, AnimationBuilder, AnimationPlayer, style } from '@angular/animations';
import { NavigationEnd, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';
import { filter, take } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class SplashScreenService 
{
	private splashScreenEl: any;
	public player: AnimationPlayer;

	constructor(
		private animationBuilder: AnimationBuilder,
		private router: Router,
        @Inject(DOCUMENT) private _document: any,
	) {}
    /**
     * @author André ATCHORI
     * Initialize
    */
	init(): void 
	{
		// Get the splash screen element
        this.splashScreenEl = this._document.body.querySelector('#splash-screen');
		
		// Hide it on the first NavigationEnd event
        if ( this.splashScreenEl ) 
        {
			const routerEvents = this.router.events
                .pipe(
                    filter((event => event instanceof NavigationEnd)),
                    take(1)
                )
                .subscribe(event => {
                    this.hide();
                });
		}
	}

    /**
     * @author André ATCHORI
     * Show the splash screen
     */
	show(): void
	{
		this.player = this.animationBuilder
			.build([
				style({ opacity: '0', zIndex: '99999' }),
				animate('600ms ease', style({ opacity: '1' }))
			])
			.create(this.splashScreenEl);

		setTimeout(() => {
			this.player.play();
		}, 0);
	}

    /**
     * @author André ATCHORI
     * Hide the splash screen
     */
	hide(): void 
	{
		this.player = this.animationBuilder
			.build([
				style({ opacity: '1' }),
				animate('600ms ease', style({ opacity: '0' }))
			])
			.create(this.splashScreenEl);

		setTimeout(() => {
			this.player.onDone(
				() => (this.splashScreenEl.style.display = 'none')
			);
			this.player.play();
		}, 0);
	}
}
