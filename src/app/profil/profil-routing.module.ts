import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfilPage } from './profil.page';

const routes: Routes = [
  {
    path: '',
    component: ProfilPage
  },
  {
    path: 'update-profil',
    loadChildren: () => import('./update-profil/update-profil.module').then( m => m.UpdateProfilPageModule)
  },
  {
    path: 'select-language',
    loadChildren: () => import('./select-language/select-language.module').then( m => m.SelectLanguagePageModule)
  },
  {
    path: 'connect-witch-phone-number',
    loadChildren: () => import('./connect-witch-phone-number/connect-witch-phone-number.module').then( m => m.ConnectWitchPhoneNumberPageModule)
  },
  {
    path: 'momo-for-bussness',
    loadChildren: () => import('./momo-for-bussness/momo-for-bussness.module').then( m => m.MomoForBussnessPageModule)
  },
  {
    path: 'print-momo-flyer',
    loadChildren: () => import('./print-momo-flyer/print-momo-flyer.module').then(m => m.PrintMomoFlyerPageModule)
  },  {
    path: 'download-momo-merchant-app',
    loadChildren: () => import('./download-momo-merchant-app/download-momo-merchant-app.module').then( m => m.DownloadMomoMerchantAppPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilPageRoutingModule {}
