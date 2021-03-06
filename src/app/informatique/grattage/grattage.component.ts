import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { InformatiqueService } from 'src/app/services/informatique.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-grattage',
  templateUrl: './grattage.component.html',
  styleUrls: ['./grattage.component.scss']
})
export class GrattageComponent implements OnInit {
  @ViewChild('zonegrattage', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  lienLinkedIn: any = "https://www.linkedin.com/in/noemie-graignic/";
  isRepTrue: boolean;
  isActiverGrattage: boolean;
  startScratchedTime: Date;
  endScratchedTime: Date;
  interval: number;
  isDiscovered: boolean;
  zonegrattage = document.getElementById("zonegrattage");
  k_index: number;
  img_grat_array: number[];
  gratte_tout: number;
  k: number;
  reponseUn: string;
  reponseDeux: string;
  reponseTrois: string;
  reponseUnSubscription: Subscription;
  reponseDeuxSubscription: Subscription;
  reponseTroisSubscription: Subscription;
  isRepUnTrue: boolean;

  constructor(private infoService: InformatiqueService) { }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.isRepTrue = true;

    // this.isRepTrue = this.infoService.getReponsesJustes();
    // console.log("isRepTrue dans service: " + this.isRepTrue);
    //this.reponsesJuste();

    //this.infoService.getIsRepUn().subscribe(value => this.isRepUnTrue = value);

    

    this.isDiscovered = false;

    // J'ai essayé de mettre une image à gratter mais elle ne s'affiche pas alors j'ai dessiné
    //this.context.globalCompositeOperation = 'destination-over';
    //const imgrattage = new Image();
    //imgrattage.addEventListener('load', function(){this.context.drawImage(imgrattage, 0, 0, 300, 300)});
    //imgrattage.src = "assets/img/informatique/grattez-ici.png";
    //this.context.drawImage(imgrattage, 0, 0, 250, 250);

    // dessin du canvas avec marqué Grattez ici
    this.context.fillStyle = 'rgba(23, 145, 167, 1)';
    this.context.fillRect(30, 30, 390, 290);
    this.context.font = "bold 44pt Calibri,Geneva,Arial";
    this.context.fillStyle = "rgb(59, 206, 206)";
    this.context.fillText("Grattez ici", 100, 190);



  }

  // Fait vrai si toutes les réponses sont juste
  /* reponsesJuste(){

    this.reponseUnSubscription = this.infoService.reponseUnObs.subscribe((data: string) => {
      this.reponseUn = data;
      console.log(this.reponseUn);
    }, (error) => {
      console.log("Erreur obs rep 1: " + error);
    }, () => {
      console.log("Fini obs rep 1!");
    });

    this.reponseDeuxSubscription = this.infoService.reponseDeuxObs.subscribe((data: string) => {
      this.reponseDeux = data;
      console.log(this.reponseDeux);
    }, (error) => {
      console.log("Erreur obs rep 2: " + error);
    }, () => {
      console.log("Fini obs rep 2!");
    });

    this.reponseTroisSubscription = this.infoService.reponseTroisObs.subscribe((data: string) => {
      this.reponseTrois = data;
      console.log(this.reponseTrois);
    }, (error) => {
      console.log("Erreur obs rep 3: " + error);
    }, () => {
      console.log("Fini obs rep 3!");
    });

    if (this.reponseUn == 'q1-r1'  && this.reponseDeux == 'q2-r1' && this.reponseTrois == 'q3-r2' ) {
      this.isRepTrue = true;
    } else {
      this.isRepTrue = false
    };
    console.log(this.isRepTrue);
    return this.isRepTrue;

  } */

  // au clic sur le canevas, le grattage est activé
  activerGrattage($event) {
    //console.log("clic sur le canvas", $event);
    this.isActiverGrattage = true;
    this.startScratchedTime = new Date();
    this.creationTableau();
  }

  creationTableau() {
    // initialisation du tableau pour le nombre de pixels effacés
    this.img_grat_array = new Array;
    for (this.k = 0; this.k < 420 * 320; this.k++) {
      this.img_grat_array[this.k] = 1;
      // attention ce console.log prend du temps car affiche les lignes
      //console.log("tableau ", this.img_grat_array[0], "et", this.img_grat_array[1]);
    }
    // initialisation pixels grattés
    this.gratte_tout = 0;
  }


  // grattage d'un carré de 30 par 30 sur le canevas quand le grattage est actif
  maMouseMove($event) {
    if (this.isActiverGrattage === true) {
      //console.log("souris bouge sur le canvas", $event);
      // enlève le dessin du canvas là où on passe la souris
      this.context.clearRect($event.layerX - 15, $event.layerY - 15, 30, 30);
      // comptage des pixels grattés
      this.k_index = parseInt(($event.layerY + 30) * 420 + ($event.layerX + 30));
      if (this.img_grat_array[this.k_index]) {
        this.gratte_tout++;
        this.img_grat_array[this.k_index] = 0;
        //console.log("le gratte_tout est de : ", this.gratte_tout);
      }
      // décompte pour l'arrêt du jeu
      this.endScratchedTime = new Date();
      this.interval = this.endScratchedTime.getTime() - this.startScratchedTime.getTime();
      //console.log("l'interval est de: ", this.interval);
      // arrêt du jeu
      if (this.interval >= 6000 && this.gratte_tout >= 250) {
        this.isDiscovered = true;
        this.isActiverGrattage = false;
        this.context.clearRect(0, 0, 420, 320);
      }
    };
  }

  /* ngOnDestroy() {
    this.reponseUnSubscription.unsubscribe();
    this.reponseDeuxSubscription.unsubscribe();
    this.reponseTroisSubscription.unsubscribe();
  } */

}
