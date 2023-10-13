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

  it('should render title', () => {
    const fixture = TestBed.createComponent(RobotGameComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.title')?.textContent).toContain(
      'Robot Simulation',
    );
  });

  it('should render buttons to controle robot', () => {
    const fixture = TestBed.createComponent(RobotGameComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.move-btn')?.textContent).toContain('MOVE');
    expect(compiled.querySelector('.turn-left-btn')?.textContent).toContain(
      'TURN LEFT',
    );
    expect(compiled.querySelector('.turn-right-btn')?.textContent).toContain(
      'TURN RIGHT',
    );
    expect(compiled.querySelector('.report-btn')?.textContent).toContain(
      'REPORT',
    );
  });
});
