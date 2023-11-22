import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { AuthService } from "../../../Services/auth.service";
import { Router } from "@angular/router";
import { User } from "../../../Models/Auth/user";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  http = inject(HttpClient)
  authService = inject(AuthService)
  router = inject(Router)

  form = this.formBuilder.nonNullable.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    this.http.post<{ user: User }>(
      'https://api.realworld.io/api/users/login',
      {user: this.form.getRawValue()}).subscribe(response => {
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user)
      this.router.navigateByUrl('/')
    })
  }
}
