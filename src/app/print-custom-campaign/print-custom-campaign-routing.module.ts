import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrintCustomCampaignPage } from './print-custom-campaign.page';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';


declare let require: any;
const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

const routes: Routes = [
  {
    path: '',
    component: PrintCustomCampaignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrintCustomCampaignPageRoutingModule {}
