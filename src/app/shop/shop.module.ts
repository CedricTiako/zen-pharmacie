import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ShopPageRoutingModule } from './shop-routing.module';
import {PrintNewsComponent} from '../shared/print-news/print-news.component';

import { ShopPage } from './shop.page';
import {HomePageModule} from '../home/home.module';
import {PrintCategoryPartnerComponent} from '../shared/print-category-partner/print-category-partner.component';
import {MapPartnerComponent} from '../shared/map-partner/map-partner.component';
import {GoogleMapsModule} from '@angular/google-maps';
import {ListPartnerComponent} from '../shared/list-partner/list-partner.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        ShopPageRoutingModule,
        HomePageModule,
        GoogleMapsModule
    ],
    exports: [
        PrintCategoryPartnerComponent
    ],
    declarations: [ShopPage, MapPartnerComponent, ListPartnerComponent,]
})
export class ShopPageModule {}
