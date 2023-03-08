import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreviewPartnerPage } from './preview-partner.page';

const routes: Routes = [
  {
    path: '',
    component: PreviewPartnerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreviewPartnerPageRoutingModule {}
