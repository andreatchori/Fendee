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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
