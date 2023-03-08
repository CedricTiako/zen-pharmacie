import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewPartnerPageRoutingModule } from './preview-partner-routing.module';

import { PreviewPartnerPage } from './preview-partner.page';
import {HomePageModule} from "../home/home.module";
import {MapPartnerItineraryComponent} from "../shared/map-partner-itinerary/map-partner-itinerary.component";
import {GoogleMapsModule} from "@angular/google-maps";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewPartnerPageRoutingModule,
    HomePageModule,
    GoogleMapsModule
  ],
    exports: [],
    declarations: [PreviewPartnerPage, MapPartnerItineraryComponent]
})
export class PreviewPartnerPageModule {}
