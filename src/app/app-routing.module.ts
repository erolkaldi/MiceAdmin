import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/auth/auth.guard';
import { EventListComponent } from './pages/event-list/event-list.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { UserListComponent } from './pages/users/user-list.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:"full"},
  {path:"home",component:HomeComponent,canActivate:[AuthGuard]},
  {path:"login",component:LoginComponent },
  {path:"register",component:RegisterComponent},
  {path:"resetpassword",component:ResetPasswordComponent},
  {path:"events",component:EventListComponent,canActivate:[AuthGuard]},
  {path:"settings",component:SettingsComponent,canActivate:[AuthGuard]},
  {path:"users",component:UserListComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }