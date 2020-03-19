import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AuthenticationComponent } from './main/authentication/authentication.component';
import { Routes, RouterModule } from '@angular/router';

import { ROUTES } from './app.routes'

import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { SharedModule } from './main/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './main/authentication/login/login.component';
import { SubjectFormComponent } from './main/core/subject/subject-form/subject-form.component';

const appRoutes: Routes = [
  {
    path: "",
    loadChildren: './main/core/core.module#CoreModule'
  }
];
/* para aplicar meta-dados em uma classe, atrib, método */
@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AuthenticationComponent,
    LoginComponent,
    SubjectFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
