import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddHearingRoutingModule } from './add-hearing-routing.module';
import { AddHearingComponent } from './add-hearing.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddHearingComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddHearingRoutingModule
  ]
})
export class AddHearingModule { }
