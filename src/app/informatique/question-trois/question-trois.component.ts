import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InformatiqueService } from 'src/app/services/informatique.service';

@Component({
  selector: 'app-question-trois',
  templateUrl: './question-trois.component.html',
  styleUrls: ['./question-trois.component.scss']
})
export class QuestionTroisComponent implements OnInit {

  questionTroisForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router, private infoService: InformatiqueService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
    this.questionTroisForm = this.formBuilder.group({
      question3: ['', Validators.required],
    });
  }

  onSaveReponseTrois(){
    console.log('réponse de la question 3:' + this.questionTroisForm.get('question3').value);
    const question3 = this.questionTroisForm.get('question3').value;
    this.infoService.emitReponseTrois(question3);
    this.router.navigate(['/informatique', 'grattage']);
  }

}
