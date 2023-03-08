import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MomoForBussnessPage } from './momo-for-bussness.page';

const routes: Routes = [
  {
    path: '',
    component: MomoForBussnessPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MomoForBussnessPageRoutingModule {}
