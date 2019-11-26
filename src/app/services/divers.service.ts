import { Injectable } from '@angular/core';
import { Divers } from '../models/divers.model';
import { Subject } from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;

@Injectable({
  providedIn: 'root'
})
export class DiversService {

  diverss: Divers[] = [];
  diverssSubject = new Subject<Divers[]>()

  constructor() {
    this.getDiverss();
  }

  emitDiverss() {
    this.diverssSubject.next(this.diverss);
  }

  saveDiverss() {
    firebase.database().ref('/diversification').set(this.diverss);
  }

  getDiverss() {
    firebase.database().ref('/diversification').on('value', (data: DataSnapshot) => {
      this.diverss = data.val() ? data.val() : [];
      this.emitDiverss();
    });
  }

  getSingleDivers(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/diversification/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewDivers(newDivers: Divers) {
    this.diverss.push(newDivers);
    this.saveDiverss();
    this.emitDiverss();
  }

  removeDivers(divers: Divers) {
    if(divers.photo){
      const storageRef = firebase.storage().refFromURL(divers.photo);
      storageRef.delete().then(
        ()=>{
          console.log('Photo supprimée !');
        }
      ).catch(
        (error)=>{
          console.log('Erreur durant la suppression de la photo : ' + error)
        }
      );
    }
    const diversIndexToRemove = this.diverss.findIndex(
      (diversEl) => {
        if (diversEl === divers) {
          return true;
        }
      }
    );
    this.diverss.splice(diversIndexToRemove, 1);
    this.saveDiverss();
    this.emitDiverss();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref().child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement en court')
          },
          (error) => {
            console.log('Erreur de chargement : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL())
          }
        );
      }
    );
  }
}
