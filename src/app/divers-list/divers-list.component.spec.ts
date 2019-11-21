import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiversListComponent } from './divers-list.component';

describe('DiversListComponent', () => {
  let component: DiversListComponent;
  let fixture: ComponentFixture<DiversListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiversListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiversListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
