import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCaseRoutingModule } from './add-case-routing.module';
import { AddCaseComponent } from './add-case.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddCaseComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddCaseRoutingModule
  ]
})
export class AddCaseModule { }
