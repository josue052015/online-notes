import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { catchError, of } from 'rxjs';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss',
    '../auth.component.scss'
  ]
})
export class RegisterComponent implements OnInit {
  loading = false;
  registerForm: FormGroup = this.formBuilder.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]],
    passwordConfirmation: ['', [Validators.required]]
  })
  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private route: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  fieldIsInvalid(field: string) {
    return this.registerForm.controls[field]?.errors && this.registerForm.controls[field]?.touched;
  }

  register() {
    if (this.registerForm?.invalid) {
      this.registerForm.markAllAsTouched()
      return;
    }
    this.loading = true;
    this.userService.register(this.registerForm.value)
      .pipe(catchError(error => {
        return of(null)
      }))
      .subscribe((response: any) => {
        this.loading = false;
        if (response?.token) {
          this.authService.allow({ token: response.token })
          this.route.navigate(["notes"])
        }
      })
  }
}
