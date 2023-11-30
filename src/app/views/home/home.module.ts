import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
//import { NgbDropdownModule, NgbModalModule, NgbOffcanvasModule } from '@ng-bootstrap/ng-bootstrap';
const routes: Routes = [
  {path: '', component: HomeComponent}
]

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
   // NgbDropdownModule
  ],
  exports:[
    RouterModule
  ]
})
export class HomeModule { }
