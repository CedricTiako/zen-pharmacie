import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrintMomoFlyerPageRoutingModule } from './print-momo-flyer-routing.module';

import { PrintMomoFlyerPage } from './print-momo-flyer.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrintMomoFlyerPageRoutingModule,
    HomePageModule,
    ReactiveFormsModule
  ],
  declarations: [PrintMomoFlyerPage]
})
export class PrintMomoFlyerPageModule {}
