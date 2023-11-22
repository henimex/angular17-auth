import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from "./Services/auth.service";
import { HttpClient } from "@angular/common/http";
import { User } from "./Models/Auth/user";

interface UsersModelTest {
  id: string
  name: string
  role: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  authService= inject(AuthService)
  httpClient=inject(HttpClient)
  title = 'AUTH Operations with Angular 17';

  ngOnInit(): void {
      this.httpClient.get<{user: User}>('https://api.realworld.io/api/user').subscribe(response => {
        this.authService.currentUserSig.set(response.user)
      })
  }

  users = signal<UsersModelTest[]>([
    {id: '1', name: "Joseph", role: 'developer'},
    {id: '2', name: "Henimex", role: 'IT'},
    {id: '3', name: "Jacob", role: 'DB Architecture'}
  ])

  user = this.users()[1];
  //user = undefined
  logout() {
    console.log("logout")
  }
}
