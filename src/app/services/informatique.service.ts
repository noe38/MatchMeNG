import { Injectable } from '@angular/core';
import { Reponse } from '../models/informatique.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InformatiqueService {

  //reponses: Reponse[] = [];
  //reponsesSubject = new Subject<Reponse[]>();
  reponseUnSubject = new Subject<string>();
  reponseDeuxSubject = new Subject<string>();
  reponseTroisSubject = new Subject<string>();
  reponseUnObs = this.reponseUnSubject.asObservable();
  reponseDeuxObs = this.reponseDeuxSubject.asObservable();
  reponseTroisObs = this.reponseTroisSubject.asObservable();

  constructor() { }


  /* emitReponses(newReponse: Reponse) {
    this.reponsesSubject.next(newReponse);
  } */

  emitReponseUn(reponseUn: string) {
    this.reponseUnSubject.next(reponseUn);
  }

  emitReponseDeux(reponseDeux: string) {
    this.reponseDeuxSubject.next(reponseDeux);
  }

  emitReponseTrois(reponseTrois: string) {
    this.reponseTroisSubject.next(reponseTrois);
  }

}