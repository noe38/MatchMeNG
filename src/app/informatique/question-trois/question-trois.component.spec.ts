import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionTroisComponent } from './question-trois.component';

describe('QuestionTroisComponent', () => {
  let component: QuestionTroisComponent;
  let fixture: ComponentFixture<QuestionTroisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionTroisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionTroisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
