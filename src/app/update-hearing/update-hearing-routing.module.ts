import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateHearingComponent } from './update-hearing.component';

const routes: Routes = [{ path: '', component: UpdateHearingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UpdateHearingRoutingModule { }
