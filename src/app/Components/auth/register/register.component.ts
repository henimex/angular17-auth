import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { HttpClient } from "@angular/common/http";
import { User } from "../../../Models/Auth/user";
import { AuthService } from "../../../Services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  formBuilder = inject(FormBuilder)
  http = inject(HttpClient)
  authService = inject(AuthService)
  router = inject(Router)

  form = this.formBuilder.nonNullable.group({
    username: ['', Validators.required],
    email: ['', Validators.required],
    password: ['', Validators.required],
  })

  onSubmit() {
    this.http.post<{ user: User }>(
      'https://api.realworld.io/api/users',
      {user: this.form.getRawValue()}).subscribe(response => {
      localStorage.setItem('token', response.user.token);
      this.authService.currentUserSig.set(response.user)
      this.router.navigateByUrl('/')
    })
  }
}

//hen_test2
//hen_test2@hen_test2
//hen_test2
