import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyPointsPageRoutingModule } from './my-points-routing.module';

import { MyPointsPage } from './my-points.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyPointsPageRoutingModule
  ],
  declarations: [MyPointsPage]
})
export class MyPointsPageModule {}
