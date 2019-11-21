import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AccueilComponent } from './accueil/accueil.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { BiologieComponent } from './biologie/biologie.component';
import { DiversListComponent } from './divers-list/divers-list.component';
import { SingleDiversComponent } from './divers-list/single-divers/single-divers.component';
import { DiversFormComponent } from './divers-list/divers-form/divers-form.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { DiversService } from './services/divers.service';
import { AsideComponent } from './aside/aside.component';


@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent,
    HeaderComponent,
    FooterComponent,
    AccueilComponent,
    InformatiqueComponent,
    BiologieComponent,
    DiversListComponent,
    SingleDiversComponent,
    DiversFormComponent,
    AsideComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuardService,
    DiversService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
