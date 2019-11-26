import { Component, OnInit, OnDestroy } from '@angular/core';
import { Divers } from '../models/divers.model';
import { Subscription } from 'rxjs';
import { DiversService } from '../services/divers.service';
import { Router } from '@angular/router';
import * as firebase from 'firebase';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-divers-list',
  templateUrl: './divers-list.component.html',
  styleUrls: ['./divers-list.component.scss']
})
export class DiversListComponent implements OnInit, OnDestroy {

  diverss: Divers[];
  diverssSubscription: Subscription;
  isAuth: boolean;

  
  constructor(private diversService: DiversService, private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.diverssSubscription = this.diversService.diverssSubject.subscribe(
      (diverss: Divers[]) => {
        this.diverss = diverss;
      }
    );
    this.diversService.getDiverss();
    this.diversService.emitDiverss();
    firebase.auth().onAuthStateChanged(
      (user) => {
        if (user) {
          this.isAuth = true;
        } else {
          this.isAuth = false;
        }
      }
    )
  }

  onNewDivers() {
    this.router.navigate(['/diversification', 'formulaire']);
  }

  onDeleteDivers(divers: Divers) {
    this.diversService.removeDivers(divers);
  }

  onViewDivers(id: number) {
    this.router.navigate(['/diversification', 'article', id]);
  }

  ngOnDestroy() {
    this.diverssSubscription.unsubscribe();
  }

}
