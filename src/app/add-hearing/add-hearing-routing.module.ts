import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHearingComponent } from './add-hearing.component';

const routes: Routes = [{ path: '', component: AddHearingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddHearingRoutingModule { }
