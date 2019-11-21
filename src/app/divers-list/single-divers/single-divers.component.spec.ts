import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleDiversComponent } from './single-divers.component';

describe('SingleDiversComponent', () => {
  let component: SingleDiversComponent;
  let fixture: ComponentFixture<SingleDiversComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleDiversComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleDiversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
