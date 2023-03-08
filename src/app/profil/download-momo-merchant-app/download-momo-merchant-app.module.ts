import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DownloadMomoMerchantAppPageRoutingModule } from './download-momo-merchant-app-routing.module';

import { DownloadMomoMerchantAppPage } from './download-momo-merchant-app.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DownloadMomoMerchantAppPageRoutingModule,
        HomePageModule
    ],
  declarations: [DownloadMomoMerchantAppPage]
})
export class DownloadMomoMerchantAppPageModule {}
