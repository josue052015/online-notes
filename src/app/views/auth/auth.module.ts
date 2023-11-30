import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';
import { RegisterComponent } from './register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from 'src/app/core/guard/auth.guard';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  /*  {path: "", redirectTo: "login",  pathMatch: 'full'}, */
  { path: "", component: AuthComponent }
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
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
