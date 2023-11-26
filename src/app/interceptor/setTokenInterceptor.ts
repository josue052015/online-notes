import { Injectable } from "@angular/core";
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, catchError, filter, Observable, switchMap, take, throwError } from 'rxjs';

import { Router } from '@angular/router';

import { Helper } from '../shared/helpers/helper.service';
import { environment } from 'src/environments/environment';
/* @Injectable()
export class SetTokenServiceInterceptor implements HttpInterceptor {

    constructor(private router: Router, private helper: Helper) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        let token: string = this.authservice.getToken();
        if (token) {
            req = req.clone({
                headers: req.headers.set('authorization', Bearer ${ token })
                    .set('device-token', localStorage.getItem("device-token") ? localStorage.getItem("device-token") : "")
            });
        }

        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {
                if (err.status === 401) {
                    return this.handle401Error(authReq, next)
                }
                return throwError(err);
            })
        );
    }
    private handle401Error(request: HttpRequest<any>, next: HttpHandler) {
        const refreshTokenParams = {
            client_Id: environment.clientId,
            grant_Type: "refresh_token",
            refresh_token: localStorage.getItem("refreshToken")
        }
        return this.authservice.tokenExchange(refreshTokenParams)
            .pipe(switchMap((data: any) => {
                localStorage.setItem("token", data.access_Token)
                localStorage.setItem("refreshToken", data.refresh_Token)
                return next.handle(this.addTokenHeader(request, data.access_Token));
            }), catchError((err) => {
               
                return throwError(err);
            })
        );
    }
    addTokenHeader(req, token) {
        return req = req.clone({
            headers: req.headers.set('authorization', Bearer ${ token })
                .set('device-token', localStorage.getItem("device-token") ? localStorage.getItem("device-token") : "")
        });
    }
} */