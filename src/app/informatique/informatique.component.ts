import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-informatique',
  templateUrl: './informatique.component.html',
  styleUrls: ['./informatique.component.scss']
})
export class InformatiqueComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onQuestionnaire1() {
    this.router.navigate(['/informatique', 'question1']);
  }

}
