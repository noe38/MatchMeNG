import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-trois',
  templateUrl: './question-trois.component.html',
  styleUrls: ['./question-trois.component.scss']
})
export class QuestionTroisComponent implements OnInit {

  questionsForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.questionsForm = this.formBuilder.group({

    })
  }

  onReponsesInformatique(){
    this.router.navigate(['/informatique', 'grattage']);
  }

}