import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubmitAQuestionPageRoutingModule } from './submit-a-question-routing.module';

import { SubmitAQuestionPage } from './submit-a-question.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubmitAQuestionPageRoutingModule
  ],
  declarations: [SubmitAQuestionPage]
})
export class SubmitAQuestionPageModule {}
