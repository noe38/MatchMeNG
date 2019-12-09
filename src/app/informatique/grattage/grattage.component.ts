import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-grattage',
  templateUrl: './grattage.component.html',
  styleUrls: ['./grattage.component.scss']
})
export class GrattageComponent implements OnInit {
  @ViewChild('zonegrattage', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  imgrattage1: any = "assets/img/informatique/grattez-ici.png";
  lienLinkedIn: any = "https://www.linkedin.com/in/noemie-graignic/";
  isRepTrue: boolean;
  isActiverGrattage: boolean;
  startScratchedTime: Date;
  endScratchedTime: Date;
  interval: number;
  isDiscovered: boolean;
  zonegrattage = document.getElementById("zonegrattage");


  constructor() { }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');
    this.isRepTrue = true;
    this.isDiscovered = false;

    // J'ai essayé de mettre une image à gratter mais elle ne s'affiche pas alors j'ai dessiné
    //this.context.globalCompositeOperation = 'destination-over';
    //const imgrattage = new Image();
    //imgrattage.addEventListener('load', function(){this.context.drawImage(imgrattage, 0, 0, 300, 300)});
    // imgrattage.src = "assets/img/informatique/grattez-ici.png";
    //imgrattage.src = "assets/img/informatique/grattez-ici.png";
    //this.context.drawImage(imgrattage, 0, 0, 250, 250);

    // dessin du canvas avec marqué Grattez ici
    this.context.fillStyle = 'rgba(23, 145, 167, 1)';
    this.context.fillRect(30, 30, 390, 290);
    this.context.font = "bold 44pt Calibri,Geneva,Arial";
    this.context.fillStyle = "rgb(59, 206, 206)";
    this.context.fillText("Grattez ici", 100, 190);


  }

  //au clic sur le canevas, le grattage est activé
  activergrattage($event) {
    console.log("clic sur le canvas", $event);
    this.isActiverGrattage = true;
    this.startScratchedTime = new Date();

  }

  // grattage d'un carré de 30 par 30 sur le canevas quand le grattage est actif
  mamousemove($event) {
    if (this.isActiverGrattage === true) {
      console.log("souris bouge sur le canvas", $event);
      // enlève le dessin du canvas là où on passe la souris
      this.context.clearRect($event.layerX - 15, $event.layerY - 15, 30, 30);
      // fin après un décompte
      this.endScratchedTime = new Date();
      this.interval = this.endScratchedTime.getTime() - this.startScratchedTime.getTime();
      console.log("l'interval est de: ", this.interval);
      if (this.interval >= 6000) {
        this.isDiscovered = true;
        this.isActiverGrattage= false;
      }
    };
  }


}
