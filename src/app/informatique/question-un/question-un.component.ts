import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformatiqueService } from 'src/app/services/informatique.service';

@Component({
  selector: 'app-question-un',
  templateUrl: './question-un.component.html',
  styleUrls: ['./question-un.component.scss']
})
export class QuestionUnComponent implements OnInit {

  questionUnForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private infoService: InformatiqueService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.questionUnForm = this.formBuilder.group({
      question1: ['', Validators.required],
    });
  }

  onSaveReponseUn() {
    console.log('réponse de la question 1 :' + this.questionUnForm.get('question1').value);
    const question1 = this.questionUnForm.get('question1').value;
    this.infoService.emitReponseUn(question1);
    this.router.navigate(['/informatique', 'question2']);
  }
}