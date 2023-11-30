import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseComponent } from './views/base/base.component';
import { AuthGuard } from './core/guard/auth.guard';
import { ErrorPageComponent } from './views/components/error-page/error-page.component';

const routes: Routes = [
  {
    path: 'auth/:action',
    children: [
      { path: '', loadChildren: () => import('./views/auth/auth.module').then(x => x.AuthModule) }
    ]
  },
  {
    path: 'notes', component: BaseComponent, canActivate: [AuthGuard],
    children: [
      { path: '', loadChildren: () => import('./views/home/home.module').then(x => x.HomeModule) }
    ]
  },
  {
    path: 'error', component: ErrorPageComponent
  },
  { path: '**', redirectTo: 'error', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
