import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
 /*  {path: "", redirectTo: "login",  pathMatch: 'full'}, */
  {path: "auth/:action", component: AuthComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    RouterModule
  ]
})
export class AuthModule { }
