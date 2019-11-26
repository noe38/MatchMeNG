import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { DiversListComponent } from './divers-list/divers-list.component';
import { DiversFormComponent } from './divers-list/divers-form/divers-form.component';
import { SingleDiversComponent } from './divers-list/single-divers/single-divers.component';
import { InformatiqueComponent } from './informatique/informatique.component';
import { BiologieComponent } from './biologie/biologie.component';
import { AuthGuardService } from './services/auth-guard.service';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'informatique', component: InformatiqueComponent },
  { path: 'biologie', component: BiologieComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'diversification', canActivate: [AuthGuardService], component: DiversListComponent },
  { path: 'diversification/formulaire', canActivate: [AuthGuardService], component: DiversFormComponent },
  { path: 'diversification/article/:id', canActivate: [AuthGuardService], component: SingleDiversComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
