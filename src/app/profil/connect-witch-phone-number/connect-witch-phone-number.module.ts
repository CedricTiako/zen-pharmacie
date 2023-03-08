import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConnectWitchPhoneNumberPageRoutingModule } from './connect-witch-phone-number-routing.module';

import { ConnectWitchPhoneNumberPage } from './connect-witch-phone-number.page';
import {HomePageModule} from "../../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConnectWitchPhoneNumberPageRoutingModule,
    HomePageModule
  ],
  declarations: [ConnectWitchPhoneNumberPage]
})
export class ConnectWitchPhoneNumberPageModule {}
