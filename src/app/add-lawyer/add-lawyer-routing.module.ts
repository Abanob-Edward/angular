import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddLawyerComponent } from './add-lawyer.component';

const routes: Routes = [{ path: '', component: AddLawyerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddLawyerRoutingModule { }
