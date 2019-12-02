import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformatiqueService } from 'src/app/services/informatique.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-question-deux',
  templateUrl: './question-deux.component.html',
  styleUrls: ['./question-deux.component.scss']
})
export class QuestionDeuxComponent implements OnInit {

  questionDeuxForm: FormGroup;
  reponseUnSubscription: Subscription;
  reponse1: string;

  constructor(private formBuilder: FormBuilder, private router: Router, private infoService: InformatiqueService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.questionDeuxForm = this.formBuilder.group({
question2: ['', Validators.required],
    });
  }

  onSaveReponseDeux(){
    console.log('réponse de la question 2:' + this.questionDeuxForm.get('question2').value);
    const question2 = this.questionDeuxForm.get('question2').value;
    this.infoService.emitReponseDeux(question2);
    this.router.navigate(['/informatique', 'question3']);
  }

}