import { Component } from '@angular/core';

interface Robot {
  x: number;
  y: number;
  facing: string;
  currentRotation: number;
}

@Component({
  selector: 'app-robot-game',
  templateUrl: './robot-game.component.html',
  styleUrls: ['./robot-game.component.css'],
})
export class RobotGameComponent {
  robot: Robot = {
    x: 2,
    y: 2,
    facing: 'NORTH',
    currentRotation: 0,
  };

  constructor() {}

  move() {
    switch (this.robot.facing) {
      case 'NORTH':
        if (this.robot.y > 0) this.robot.y -= 1;
        break;
      case 'EAST':
        if (this.robot.x < 4) this.robot.x += 1;
        break;
      case 'SOUTH':
        if (this.robot.y < 4) this.robot.y += 1;
        break;
      case 'WEST':
        if (this.robot.x > 0) this.robot.x -= 1;
        break;
    }
  }

  turnLeft() {
    switch (this.robot.facing) {
      case 'NORTH':
        this.robot.facing = 'WEST';
        break;
      case 'EAST':
        this.robot.facing = 'NORTH';
        break;
      case 'SOUTH':
        this.robot.facing = 'EAST';
        break;
      case 'WEST':
        this.robot.facing = 'SOUTH';
        break;
    }
    this.robot.currentRotation -= 90;
  }

  turnRight() {
    switch (this.robot.facing) {
      case 'NORTH':
        this.robot.facing = 'EAST';
        break;
      case 'EAST':
        this.robot.facing = 'SOUTH';
        break;
      case 'SOUTH':
        this.robot.facing = 'WEST';
        break;
      case 'WEST':
        this.robot.facing = 'NORTH';
        break;
    }
    this.robot.currentRotation += 90;
  }

  report() {
    alert(`Robot is at (${this.robot.x}, ${this.robot.y}), facing ${this.robot.facing}`);
  }
}
