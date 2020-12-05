import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: '/auth1/sign-in', pathMatch: 'full'
  },
  {
    path: 'auth1',
    loadChildren: () => import('./content/pages/auth-1/auth-1.module').then(m => m.Auth1Module)
  },
  {
    path: 'auth2',
    loadChildren: () => import('./content/pages/auth-2/auth-2.module').then(m => m.Auth2Module)
  },
  {
    path: 'auth3',
    loadChildren: () => import('./content/pages/auth-3/auth-3.module').then(m => m.Auth3Module)
  },
  {
    path: 'auth4',
    loadChildren: () => import('./content/pages/auth-4/auth-4.module').then(m => m.Auth4Module)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
