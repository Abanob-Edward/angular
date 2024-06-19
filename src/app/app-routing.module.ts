import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'account',
    loadChildren: () => import('@abp/ng.account').then(m => m.AccountModule.forLazy()),
  },
  {
    path: 'identity',
    loadChildren: () => import('@abp/ng.identity').then(m => m.IdentityModule.forLazy()),
  },
  {
    path: 'tenant-management',
    loadChildren: () =>
      import('@abp/ng.tenant-management').then(m => m.TenantManagementModule.forLazy()),
  },
  {
    path: 'setting-management',
    loadChildren: () =>
      import('@abp/ng.setting-management').then(m => m.SettingManagementModule.forLazy()),
  },
  { path: 'lawyers', loadChildren: () => import('./lawyer/lawyer.module').then(m => m.LawyerModule) },
  { path: 'Cases', loadChildren: () => import('./case/case.module').then(m => m.CaseModule) },
  { path: 'Hearings', loadChildren: () => import('./hearing/hearing.module').then(m => m.HearingModule) },
  { path: 'addLawyer', loadChildren: () => import('./add-lawyer/add-lawyer.module').then(m => m.AddLawyerModule) },
  { path: 'updateLawyer/:id', loadChildren: () => import('./update-lawyer/update-lawyer.module').then(m => m.UpdateLawyerModule) },
  { path: 'updateHearing/:id', loadChildren: () => import('./update-hearing/update-hearing.module').then(m => m.UpdateHearingModule) },
  { path: 'updateCase/:id', loadChildren: () => import('./update-case/update-case.module').then(m => m.UpdateCaseModule) },
  { path: 'addCase', loadChildren: () => import('./add-case/add-case.module').then(m => m.AddCaseModule) },
  { path: 'addHearing', loadChildren: () => import('./add-hearing/add-hearing.module').then(m => m.AddHearingModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
