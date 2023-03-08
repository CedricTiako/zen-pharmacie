import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintCustomCampaignPageRoutingModule } from './print-custom-campaign-routing.module';

import { PrintCustomCampaignPage } from './print-custom-campaign.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        PrintCustomCampaignPageRoutingModule,
        HomePageModule
    ],
  declarations: [PrintCustomCampaignPage]
})
export class PrintCustomCampaignPageModule {}
