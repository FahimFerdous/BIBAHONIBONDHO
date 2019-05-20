import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { CompleteKaziProfileComponent } from './complete-kazi-profile/complete-kazi-profile.component';
import { CompleteVolunteerProfileComponent } from './complete-volunteer-profile/complete-volunteer-profile.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { KaziProfileComponent } from './kazi-profile/kazi-profile.component';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';

const routes: Routes = [
  {
    path: '',
    component: AppBodyComponent
  },
  {
    path: 'Login',
    component: LoginPageComponent
   },
  {
    path: 'complete-kazi-profile',
    component: CompleteKaziProfileComponent
   },
   {
    path: 'kazi-profile',
    component: KaziProfileComponent
   },
   {
    path: 'complete-volunteer-profile',
    component: CompleteVolunteerProfileComponent
   },
   {
    path: 'volunteer-profile',
    component: VolunteerProfileComponent
   }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
