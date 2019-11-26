import { Component, OnInit } from '@angular/core';
import { Divers } from 'src/app/models/divers.model';
import { DiversService } from 'src/app/services/divers.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-single-divers',
  templateUrl: './single-divers.component.html',
  styleUrls: ['./single-divers.component.scss']
})
export class SingleDiversComponent implements OnInit {

  divers: Divers;

  constructor(private diversService: DiversService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.divers = new Divers('', '');
    const id = this.route.snapshot.params['id'];
    this.diversService.getSingleDivers(+id).then(
      (divers: Divers)=>{
        this.divers = divers;
      }
    );
  }

  onBack(){
    this.router.navigate(['/diversification']);
  }

}
