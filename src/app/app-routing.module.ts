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
import { QuestionUnComponent } from './informatique/question-un/question-un.component';
import { QuestionDeuxComponent } from './informatique/question-deux/question-deux.component';
import { QuestionTroisComponent } from './informatique/question-trois/question-trois.component';
import { GrattageComponent } from './informatique/grattage/grattage.component';


const routes: Routes = [
  { path: '', component: AccueilComponent },
  { path: 'informatique', component: InformatiqueComponent },
  { path: 'informatique/question1', component: QuestionUnComponent },
  { path: 'informatique/question2', component: QuestionDeuxComponent},
  { path: 'informatique/question3', component: QuestionTroisComponent},
  { path: 'informatique/grattage', component: GrattageComponent},
  { path: 'biologie', component: BiologieComponent },
  { path: 'auth/signup', component: SignupComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'diversification', component: DiversListComponent },
  { path: 'diversification/formulaire', canActivate: [AuthGuardService], component: DiversFormComponent },
  { path: 'diversification/article/:id', component: SingleDiversComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
