import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateCaseComponent } from './update-case.component';

const routes: Routes = [{ path: '', component: UpdateCaseComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateCaseRoutingModule { }
