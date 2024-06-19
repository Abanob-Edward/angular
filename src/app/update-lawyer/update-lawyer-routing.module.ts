import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateLawyerComponent } from './update-lawyer.component';

const routes: Routes = [{ path: '', component: UpdateLawyerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateLawyerRoutingModule { }
