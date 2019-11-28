import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionDeuxComponent } from './question-deux.component';

describe('QuestionDeuxComponent', () => {
  let component: QuestionDeuxComponent;
  let fixture: ComponentFixture<QuestionDeuxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionDeuxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionDeuxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
