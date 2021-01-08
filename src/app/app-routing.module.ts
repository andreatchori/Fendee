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
  {
    path: 'auth5',
    loadChildren: () => import('./content/pages/auth-5/auth-5.module').then(m => m.Auth5Module)
  },
  {
    path: 'auth6',
    loadChildren: () => import('./content/pages/auth-6/auth-6.module').then(m => m.Auth6Module)
  },
  {
    path: 'auth7',
    loadChildren: () => import('./content/pages/auth-7/auth-7.module').then(m => m.Auth7Module)
  },
  {
    path: 'auth8',
    loadChildren: () => import('./content/pages/auth-8/auth-8.module').then(m => m.Auth8Module)
  },
  {
    path: 'auth9',
    loadChildren: () => import('./content/pages/auth-9/auth-9.module').then(m => m.Auth9Module)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
