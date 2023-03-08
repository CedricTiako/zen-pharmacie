import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
import {ChooseCountryComponent} from '../shared/choose-country/choose-country.component';
import {PrintNewsComponent} from '../shared/print-news/print-news.component';
import {HeaderComponent} from '../shared/header/header.component';
import {PrintTopMicroServiceComponent} from '../shared/print-top-micro-service/print-top-micro-service.component';
import {PrintTopPoolsComponent} from '../shared/print-top-pools/print-top-pools.component';
import {MiniaturePollComponent} from '../shared/miniature-poll/miniature-poll.component';
import {PrintHowToComponent} from '../shared/print-how-to/print-how-to.component';
import {MiniatureArticleComponent} from '../shared/miniature-article/miniature-article.component';
import {PrintSuggestedServicesComponent} from '../shared/print-suggested-services/print-suggested-services.component';
import {PrintCategoryPartnerComponent} from '../shared/print-category-partner/print-category-partner.component';
import {MiniaturePartnerComponent} from '../shared/miniature-partner/miniature-partner.component';
import {MiniatureFaqComponent} from '../shared/miniature-faq/miniature-faq.component';
import {MapPartnerGlobalComponent} from '../shared/map-partner-global/map-partner-global.component';
import {GoogleMapsModule} from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    GoogleMapsModule
  ],
  exports: [
    ChooseCountryComponent,
    HeaderComponent
    ,
    PrintTopMicroServiceComponent,
    MiniatureArticleComponent,
    PrintCategoryPartnerComponent,
    MiniaturePartnerComponent,
    MiniatureFaqComponent,
    MapPartnerGlobalComponent
  ],
  declarations: [HomePage,
    ChooseCountryComponent,
     MiniaturePartnerComponent,
     PrintNewsComponent,
     PrintCategoryPartnerComponent,
     HeaderComponent,
     PrintTopMicroServiceComponent,
     PrintTopPoolsComponent,
     MiniaturePollComponent,
     PrintHowToComponent,
     MiniatureArticleComponent,
     PrintSuggestedServicesComponent,
     MiniatureFaqComponent,
    MapPartnerGlobalComponent]
})
export class HomePageModule {}
