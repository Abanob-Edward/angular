import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateCaseRoutingModule } from './update-case-routing.module';
import { UpdateCaseComponent } from './update-case.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateCaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UpdateCaseRoutingModule
  ]
})
export class UpdateCaseModule { }
