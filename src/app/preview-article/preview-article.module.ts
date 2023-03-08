import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreviewArticlePageRoutingModule } from './preview-article-routing.module';

import { PreviewArticlePage } from './preview-article.page';
import {HomePageModule} from "../home/home.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreviewArticlePageRoutingModule,
    HomePageModule
  ],
  declarations: [PreviewArticlePage]
})
export class PreviewArticlePageModule {}
