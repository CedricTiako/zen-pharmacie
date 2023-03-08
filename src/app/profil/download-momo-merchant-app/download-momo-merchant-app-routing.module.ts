import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DownloadMomoMerchantAppPage } from './download-momo-merchant-app.page';

const routes: Routes = [
  {
    path: '',
    component: DownloadMomoMerchantAppPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DownloadMomoMerchantAppPageRoutingModule {}
