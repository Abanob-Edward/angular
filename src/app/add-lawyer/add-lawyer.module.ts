import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddLawyerRoutingModule } from './add-lawyer-routing.module';
import { AddLawyerComponent } from './add-lawyer.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AddLawyerComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AddLawyerRoutingModule
  ]
})
export class AddLawyerModule { }
