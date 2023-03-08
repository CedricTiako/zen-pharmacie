import { Component, OnInit } from '@angular/core';
import {CountryService} from '../../services/country/country.service';
import {Country} from '../../models/country';
import {Fees} from '../../models/fees';
import {GroupFees} from '../../models/groupFees';
import {GroupOperator} from '../../models/groupOperator';
import {Operator} from '../../models/operator';
import {PartnerService} from '../../services/pharmacy/partner.service';
import {Partner} from '../../models/partner';
import {GroupPartner} from '../../models/groupPartner';
import {PollService} from '../../services/poll/poll.service';

import {Remittance} from '../../models/remittance';
import {ActionSheetController} from '@ionic/angular';
import {GroupMicroService} from '../../models/groupMicroService';
import {Poll} from '../../models/poll';
import {CategoryPartner} from '../../models/categoryPartner';
import {CashierService} from '../../services/cashier/cashier.service';
import {Cashier} from '../../models/cashier';

import {HowTo} from '../../models/howTo';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article/article.service';
import { PartnerDetail } from 'src/app/models/partnerDetail';

@Component({
  selector: 'app-boutton-tchat',
  templateUrl: './boutton-tchat.component.html',
  styleUrls: ['./boutton-tchat.component.scss'],
})
export class BouttonTchatComponent implements OnInit {

  constructor(private articleService: ArticleService, private cashierSevice: CashierService,  private actionSheetController: ActionSheetController,  private pollService: PollService, private partnerService: PartnerService, private countryService: CountryService,) { }

  ngOnInit() {
  }

  addArticle() {
    this.articleService.add(new Article( 
      prompt('titre'), prompt('content'), 1, prompt('description'), prompt('logo'), prompt('miniature image'), prompt('categorie'), [prompt('tags (vous pouvez separer par ;')], prompt('link'), prompt('create_by')));
  }


  addCountry() {
    this.countryService.add(new Country(prompt('id'), prompt('name'), Number(prompt('code')) as number, prompt('flag'), Number(prompt('est un pays de app ? (0|1)')),prompt('create_by')));
  }



 
  addCategoryPartner() {
    this.partnerService.addCategoryPartner(new CategoryPartner(prompt('id'), prompt('name'), prompt('illustration'), prompt('type categorie'),prompt('create_by')));
  }

  addPartner() {
    this.partnerService.addPartner(new Partner(prompt('id'), prompt('name'), prompt('logo'), prompt('id country'),  Number(prompt('longitude')), Number(prompt('latitude')), prompt('latitude'),prompt('id category partner'), prompt('logo pins location'), null, null, null, prompt('content (separe par ; pour plusieurs)'), prompt('services disponibles (separe par ; pour plusieurs)')));
  }



  addCashier() {
    this.cashierSevice.add(new Cashier(prompt('id'), prompt('id partner'), prompt('name'), prompt('code'), 1, prompt('notes'), prompt('medias (separe par ; pour plusieurs)'),prompt('idCity')));
  }

  addPoll() {
    // this.pollService.addNewpoll(new Poll(prompt('Titre')));
  }

  addRemittance() {
    // this.remittanceService.add(new Remittance(prompt('id'), prompt('id country (separe par ; pour plusieurs)').split(';'), 1, prompt('id fees'), prompt('id group partner')));
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Mode Debug X-Experience',
      cssClass: 'my-custom-class',
      buttons: [{
        text: 'Ajouter pays',
        role: 'destructive',
        handler: () => {
          this.addCountry();
        } },   {
        text: 'Ajouter sondage',
        data: 10,
        handler: () => {
          this.addPoll();
        } }, {
        text: 'Ajouter article',
        data: 10,
        handler: () => {
          this.addArticle();
        } },  {
        text: 'Ajouter category partner',
        data: 10,
        handler: () => {
          this.addCategoryPartner();
        } },  {
        text: 'Ajouter partner',
        data: 10,
        handler: () => {
          this.addPartner();
        } }, {
        text: 'Ajouter caisse',
        data: 10,
        handler: () => {
          this.addCashier();
        } }, {
        text: 'Ajouter remittance',
        data: 10,
        handler: () => {
          this.addRemittance();
        }
      }]
    });
    await actionSheet.present();
  }

}
