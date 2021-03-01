import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { LandingComponent } from './landing/landing.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { RepositoriesComponent } from './repositories/repositories.component';
//import { ServicesComponent } from './services/services.component';
import { UserInfoComponent } from './user-info/user-info.component';
import { HighlightDirective } from './highlight.directive';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
   // LandingComponent,
    NavbarComponent,
    FormComponent,
    RepositoriesComponent,
   // ServicesComponent,
    UserInfoComponent,
  HighlightDirective,
   HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
