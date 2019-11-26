import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { DiversService } from 'src/app/services/divers.service';
import { Router } from '@angular/router';
import { Divers } from 'src/app/models/divers.model';

@Component({
  selector: 'app-divers-form',
  templateUrl: './divers-form.component.html',
  styleUrls: ['./divers-form.component.scss']
})
export class DiversFormComponent implements OnInit {

  diversForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
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
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.diversService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}
