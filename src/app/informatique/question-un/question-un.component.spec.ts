import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionUnComponent } from './question-un.component';

describe('QuestionUnComponent', () => {
  let component: QuestionUnComponent;
  let fixture: ComponentFixture<QuestionUnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionUnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionUnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
