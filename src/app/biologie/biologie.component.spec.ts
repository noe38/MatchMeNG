import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiologieComponent } from './biologie.component';

describe('BiologieComponent', () => {
  let component: BiologieComponent;
  let fixture: ComponentFixture<BiologieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiologieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiologieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
