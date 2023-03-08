import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MomoForBussnessPageRoutingModule } from './momo-for-bussness-routing.module';

import { MomoForBussnessPage } from './momo-for-bussness.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        MomoForBussnessPageRoutingModule,
        HomePageModule
    ],
  declarations: [MomoForBussnessPage]
})
export class MomoForBussnessPageModule {}
