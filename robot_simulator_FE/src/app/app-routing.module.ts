import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RobotGameComponent } from './robot-game/robot-game.component';

const routes: Routes = [{ path: '', component: RobotGameComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
