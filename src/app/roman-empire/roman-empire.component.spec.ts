import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RomanEmpireComponent } from './roman-empire.component';

describe('RomanEmpireComponent', () => {
  let component: RomanEmpireComponent;
  let fixture: ComponentFixture<RomanEmpireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RomanEmpireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RomanEmpireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
