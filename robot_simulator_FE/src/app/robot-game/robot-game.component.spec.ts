import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RobotGameComponent } from './robot-game.component';

describe('RobotGameComponent', () => {
  let component: RobotGameComponent;
  let fixture: ComponentFixture<RobotGameComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RobotGameComponent],
    });
    fixture = TestBed.createComponent(RobotGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
