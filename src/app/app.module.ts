import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './views/auth/auth.module';
import { BaseComponent } from './views/base/base.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SetTokenServiceInterceptor } from './interceptor/setTokenInterceptor';
import { AuthGuard } from './core/guard/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: SetTokenServiceInterceptor, multi: true },
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
