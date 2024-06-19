import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UpdateLawyerRoutingModule } from './update-lawyer-routing.module';
import { UpdateLawyerComponent } from './update-lawyer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UpdateLawyerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UpdateLawyerRoutingModule
  ]
})
export class UpdateLawyerModule { }
