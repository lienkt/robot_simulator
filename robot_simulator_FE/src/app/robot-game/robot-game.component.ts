import { Component, HostListener } from '@angular/core';

const tableUnits = 5;
const defaultDirection = 'NORTH';
const defaultTableWidth = 500;

interface Robot {
  placed: boolean;
  x: number;
  y: number;
  facing: string;
  currentRotation: number;
  tableTopWidth: number;
}

@Component({
  selector: 'app-robot-game',
  templateUrl: './robot-game.component.html',
  styleUrls: ['./robot-game.component.css'],
})
export class RobotGameComponent {
  robot: Robot = {
    placed: false,
    x: 0,
    y: 0,
    facing: defaultDirection,
    currentRotation: 0,
    tableTopWidth: defaultTableWidth,
  };

  constructor() {}

  @HostListener('window:resize')
  updateWidth() {
    const tableTopElement = document.querySelector('.tabletop') as HTMLElement;
    if (
      this.robot &&
      tableTopElement &&
      tableTopElement.offsetWidth !== this.robot.tableTopWidth
    ) {
      this.robot.tableTopWidth = tableTopElement.offsetWidth;
    }
  }

  place(event: MouseEvent) {
    if (!this.robot.placed) {
      const tableTopElement = document.querySelector(
        '.tabletop',
      ) as HTMLElement;
      const offsetX = Math.floor(
        event.offsetX / (tableTopElement.offsetWidth / tableUnits),
      );
      const offsetY = Math.floor(
        event.offsetY / (tableTopElement.offsetWidth / tableUnits),
      );

      if (
        offsetX >= 0 &&
        offsetX < tableUnits &&
        offsetY >= 0 &&
        offsetY < tableUnits
      ) {
        this.robot = {
          placed: true,
          x: offsetX,
          y: offsetY,
          facing: defaultDirection,
          currentRotation: 0,
          tableTopWidth: tableTopElement.offsetWidth,
        };
      }
    }
  }

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
    alert(
      `Robot is at (${this.robot.x}, ${this.robot.y}), facing ${this.robot.facing}`,
    );
  }
}
