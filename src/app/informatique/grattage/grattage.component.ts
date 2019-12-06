import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-grattage',
  templateUrl: './grattage.component.html',
  styleUrls: ['./grattage.component.scss']
})
export class GrattageComponent implements OnInit {
  @ViewChild('zonegrattage', { static: true }) canvas: ElementRef<HTMLCanvasElement>;
  private context: CanvasRenderingContext2D;
  imgrattage1: any = "assets/img/informatique/grattez-ici.png";



  constructor() { }

  ngOnInit() {
    this.context = this.canvas.nativeElement.getContext('2d');

    // J'ai essayé de mettre une image à gratter mais elle ne s'affiche pas alors j'ai dessiné
    //this.context.globalCompositeOperation = 'destination-over';
    const imgrattage = new Image();
    //imgrattage.addEventListener('load', function(){this.context.drawImage(imgrattage, 0, 0, 300, 300)});
    // imgrattage.src = "assets/img/informatique/grattez-ici.png";
    imgrattage.src = "assets/img/informatique/grattez-ici.png";
    this.context.drawImage(imgrattage, 0, 0, 200, 200);

    this.context.fillStyle = 'rgba(23, 145, 167, 1)';
    this.context.fillRect(30, 30, 390, 290);
    this.context.font = "bold 44pt Calibri,Geneva,Arial";
    this.context.fillStyle = "rgb(59, 206, 206)";
    this.context.fillText("Grattez ici", 100, 190);

  }


}
