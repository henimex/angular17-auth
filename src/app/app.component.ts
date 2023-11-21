import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from "./Services/auth.service";
import { HttpClient, HttpClientModule } from "@angular/common/http";

interface UsersModel {
  id: string
  name: string
  role: string
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  authService= inject(AuthService)
  httpClient=inject(HttpClient)
  title = 'AUTH Operations with Angluar 17';

  ngOnInit(): void {
      this.httpClient.get<{user: UsersModel}>('https://api.realworld.io/api/user').subscribe(response => {
        console.log(response);
      })
  }

  users = signal<UsersModel[]>([
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
