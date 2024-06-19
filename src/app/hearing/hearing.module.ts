import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HearingRoutingModule } from './hearing-routing.module';
import { HearingComponent } from './hearing.component';


@NgModule({
  declarations: [
    HearingComponent
  ],
  imports: [
    CommonModule,
    HearingRoutingModule
  ]
})
export class HearingModule { }
