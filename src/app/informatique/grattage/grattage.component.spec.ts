import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrattageComponent } from './grattage.component';

describe('GrattageComponent', () => {
  let component: GrattageComponent;
  let fixture: ComponentFixture<GrattageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrattageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrattageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
