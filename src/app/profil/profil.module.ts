import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProfilPageRoutingModule } from './profil-routing.module';

import { ProfilPage } from './profil.page';
import {TabsPageModule} from '../tabs/tabs.module';
import {HomePageModule} from '../home/home.module';
import {ShopPageModule} from '../shop/shop.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilPageRoutingModule,
    TabsPageModule,
    HomePageModule,
    ShopPageModule
  ],
  declarations: [ProfilPage]
})
export class ProfilPageModule {}
