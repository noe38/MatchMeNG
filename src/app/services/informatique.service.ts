import { Injectable } from '@angular/core';
//import { Reponse } from '../models/informatique.model';
import { Subject, from, iif, Observable, of } from 'rxjs';
import { sequenceEqual, switchMap } from 'rxjs/operators'

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
  isRepTrue: boolean;
  unJuste = from("q1-1");
  deuxJuste = from("q2-r1");
  troisJuste = from("q3-r2");
  isRepUnTrue: boolean;
  isRepDeuxTrue: boolean;
  isRepTroisTrue: boolean;

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

  getReponsesJustes() {

//     this.reponseUnObs.pipe(
//       switchMap(this.reponseUnObs=> {
//         if(this.reponseUnSubject.pipe(sequenceEqual(this.unJuste))){
//       return this.isRepTrue = true
//     } else { this.isRepTrue = false }
//   });
// );

  // this.isRepTrue = iif(
  //   ()=> this.reponseUnSubject.pipe(sequenceEqual(this.unJuste)),
  //   of(true),
  //   of(false)
  // )




  if (this.reponseUnSubject.pipe(sequenceEqual(this.unJuste)) /* && this.reponseDeuxSubject.pipe(sequenceEqual(this.deuxJuste)) && this.reponseTroisSubject.pipe(sequenceEqual(this.troisJuste)) */) {
    return this.isRepTrue = true;
  } else {
    return this.isRepTrue = false;
  };

}

getIsRepUn(){
  return this.reponseUnObs.pipe(sequenceEqual(this.unJuste))
}
getIsRepDeux(){
  return this.reponseDeuxSubject.pipe(sequenceEqual(this.deuxJuste))
}
getIsRepTrois(){
  return this.reponseTroisSubject.pipe(sequenceEqual(this.troisJuste))
}

}