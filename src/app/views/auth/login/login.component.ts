import { Component, OnInit } from '@angular/core';
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
  loginForm: FormGroup = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private route: Router
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
      this.authService.login(
        {
          Email: this.loginForm.controls["email"].value,
          Password: this.loginForm.controls["password"].value
        })
        .pipe(catchError(error => {
          return of(error)
        }))
        .subscribe(response => {
          this.authService.allow({token: response})
          this.route.navigate(["notes"])
        })
      
    }

  }

}
