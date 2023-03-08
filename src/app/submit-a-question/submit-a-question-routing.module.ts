import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubmitAQuestionPage } from './submit-a-question.page';

const routes: Routes = [
  {
    path: '',
    component: SubmitAQuestionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubmitAQuestionPageRoutingModule {}
