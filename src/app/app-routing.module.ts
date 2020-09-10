import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MrRobotComponent } from './mr-robot/mr-robot.component';
import { MoneyHeistComponent } from './money-heist/money-heist.component';
import { RomanEmpireComponent } from './roman-empire/roman-empire.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';


const routes: Routes = [
  { path: 'mr-robot', component: MrRobotComponent },
  { path: 'money-heist', component: MoneyHeistComponent },
  { path: 'roman-empire', component: RomanEmpireComponent },
  { path: 'coronavirus', component: CoronavirusComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
