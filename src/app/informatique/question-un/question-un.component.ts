import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-un',
  templateUrl: './question-un.component.html',
  styleUrls: ['./question-un.component.scss']
})
export class QuestionUnComponent implements OnInit {

  questionUnForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

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
    this.router.navigate(['/informatique', 'question2']);
  }
}


/*  constructor(private formBuilder: FormBuilder,
   private diversService: DiversService,
   private router: Router) { }

 ngOnInit() {
   this.initForm();
 }

 initForm() {
   this.diversForm = this.formBuilder.group({
     title: ['', Validators.required],
     date: ['', Validators.required],
     synopsis:''
   });
 }

 onSaveDivers() {
   const title = this.diversForm.get('title').value;
   const date = this.diversForm.get('date').value;
   const synopsis = this.diversForm.get('synopsis').value;
   const newDivers = new Divers(title, date);
   newDivers.synopsis = synopsis;
   if (this.fileUrl && this.fileUrl !== '') {
     newDivers.photo = this.fileUrl;
   }
   this.diversService.createNewDivers(newDivers);
   this.router.navigate(['/diversification']);
 } */