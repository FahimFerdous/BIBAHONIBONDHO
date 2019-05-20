import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppBodyComponent } from './app-body/app-body.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { RegistrationComponent } from './registration/registration.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { CompleteKaziProfileComponent } from './complete-kazi-profile/complete-kazi-profile.component';
import { CompleteVolunteerProfileComponent } from './complete-volunteer-profile/complete-volunteer-profile.component';
import { KaziProfileComponent } from './kazi-profile/kazi-profile.component';
import { VolunteerProfileComponent } from './volunteer-profile/volunteer-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppBodyComponent,
    AppFooterComponent,
    RegistrationComponent,
    LoginPageComponent,
    CompleteKaziProfileComponent,
    CompleteVolunteerProfileComponent,
    KaziProfileComponent,
    VolunteerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
