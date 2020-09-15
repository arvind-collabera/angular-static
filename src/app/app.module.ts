import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MrRobotComponent } from './mr-robot/mr-robot.component';
import { MoneyHeistComponent } from './money-heist/money-heist.component';
import { RomanEmpireComponent } from './roman-empire/roman-empire.component';
import { CoronavirusComponent } from './coronavirus/coronavirus.component';

@NgModule({
  declarations: [
    AppComponent,
    MrRobotComponent,
    MoneyHeistComponent,
    RomanEmpireComponent,
    CoronavirusComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
