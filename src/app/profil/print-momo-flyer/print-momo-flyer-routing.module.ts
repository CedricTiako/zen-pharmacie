import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintMomoFlyerPage } from './print-momo-flyer.page';

const routes: Routes = [
  {
    path: '',
    component: PrintMomoFlyerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintMomoFlyerPageRoutingModule {}
