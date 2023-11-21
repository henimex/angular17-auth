import { Routes } from '@angular/router';
import { LoginComponent } from "./Components/auth/login/login.component";
import { RegisterComponent } from "./Components/auth/register/register.component";

export const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},

];
