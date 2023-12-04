import { Component, OnInit, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss',
    '../auth.component.scss'
  ]
})
export class LoginComponent implements OnInit {
  InvalidLogin = false;
  loading = false;
  loginForm: FormGroup = this.formBuilder.group({
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', [Validators.required, Validators.minLength(8)]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router,
    private changeDetector: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  fieldIsInvalid(field: string) {
    return this.loginForm.controls[field]?.errors && this.loginForm.controls[field]?.touched;
  }

  login() {
    if (this.loginForm?.invalid) {
      this.loginForm.markAllAsTouched()
      return;
    }
    else {
      this.loading = true
      this.authService.login(this.loginForm.value)
        .pipe(catchError(error => {
          this.InvalidLogin = true
          return of(null)
        }))
        .subscribe((response: any) => {
          this.loading = false
          if (response) {
            this.authService.allow({ token: response })
            this.route.navigate(["notes"])
          }
        })

    }

  }

}
