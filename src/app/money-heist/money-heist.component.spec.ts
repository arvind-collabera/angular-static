import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoneyHeistComponent } from './money-heist.component';

describe('MoneyHeistComponent', () => {
  let component: MoneyHeistComponent;
  let fixture: ComponentFixture<MoneyHeistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoneyHeistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoneyHeistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
