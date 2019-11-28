import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-deux',
  templateUrl: './question-deux.component.html',
  styleUrls: ['./question-deux.component.scss']
})
export class QuestionDeuxComponent implements OnInit {

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
    this.router.navigate(['/informatique', 'question3']);
  }

}