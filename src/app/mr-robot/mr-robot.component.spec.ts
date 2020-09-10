import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MrRobotComponent } from './mr-robot.component';

describe('MrRobotComponent', () => {
  let component: MrRobotComponent;
  let fixture: ComponentFixture<MrRobotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MrRobotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MrRobotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
