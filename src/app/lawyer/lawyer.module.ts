import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyerRoutingModule } from './lawyer-routing.module';
import { LawyerComponent } from './lawyer.component';


@NgModule({
  declarations: [
    LawyerComponent
  ],
  imports: [
    CommonModule,
    LawyerRoutingModule
  ]
})
export class LawyerModule { }
