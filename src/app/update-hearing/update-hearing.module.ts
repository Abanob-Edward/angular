import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateHearingRoutingModule } from './update-hearing-routing.module';
import { UpdateHearingComponent } from './update-hearing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateHearingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UpdateHearingRoutingModule
  ]
})
export class UpdateHearingModule { }
