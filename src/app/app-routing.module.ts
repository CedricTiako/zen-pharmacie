import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'preview-partner/:id',
    loadChildren: () => import('./preview-partner/preview-partner.module').then( m => m.PreviewPartnerPageModule)
  },
  {
    path: 'profil',
    loadChildren: () => import('./profil/profil.module').then( m => m.ProfilPageModule)
  },
  {
    path: 'preview-article/:id',
    loadChildren: () => import('./preview-article/preview-article.module').then( m => m.PreviewArticlePageModule)
  },
  {
    path: 'poll/:id',
    loadChildren: () => import('./pool/pool.module').then( m => m.PoolPageModule)
  },
  {
    path: 'article/:id',
    loadChildren: () => import('./preview-article/preview-article.module').then( m => m.PreviewArticlePageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then( m => m.AdminPageModule)
  },
  {
    path: 'top',
    loadChildren: () => import('./top/top.module').then( m => m.TopPageModule)
  },
  {
    path: 'my-points',
    loadChildren: () => import('./my-points/my-points.module').then( m => m.MyPointsPageModule)
  },
  {
    path: 'submit-a-question',
    loadChildren: () => import('./submit-a-question/submit-a-question.module').then( m => m.SubmitAQuestionPageModule)
  },
  {
    path: 'invite-friends',
    loadChildren: () => import('./invite-friends/invite-friends.module').then( m => m.InviteFriendsPageModule)
  },
  {
    path: 'how-it-works',
    loadChildren: () => import('./how-it-works/how-it-works.module').then( m => m.HowItWorksPageModule)
  },
  {
    path: 'print-custom-campaign',
    loadChildren: () => import('./print-custom-campaign/print-custom-campaign.module').then( m => m.PrintCustomCampaignPageModule)
  }

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
