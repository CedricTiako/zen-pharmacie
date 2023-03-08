import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Campagne} from '../models/campagne';
import {Partner} from '../models/partner';

import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';

import {CampagneService} from '../services/campagne/campagne.service';
import {PartnerService} from '../services/pharmacy/partner.service';
import {ActivatedRoute} from '@angular/router';

declare let require: any;
const htmlToPdfmake = require('html-to-pdfmake');
(pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

import * as htmlToImage from 'html-to-image';
import {environment} from '../../environments/environment.prod';

@Component({
  selector: 'app-print-custom-campaign',
  templateUrl: './print-custom-campaign.page.html',
  styleUrls: ['./print-custom-campaign.page.scss'],
})
export class PrintCustomCampaignPage implements OnInit {

  @ViewChild('pdfTable')

  pdfTable!: ElementRef;

  partner: Partner;
  campagne: Campagne;
  langue = '';
  isLoading = true;
  extraLink = '';

  imageCampagneBase64: string;
  qrCodeBase64: string;

  constructor(private route: ActivatedRoute, private campagneService: CampagneService, private partenerService: PartnerService) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.idStore && this.route.snapshot.queryParams.idCampagne && this.route.snapshot.queryParams.language) {
      this.extraLink = '?idStore=' +
      this.route.snapshot.queryParams.idStore + '&idCampagne=' +
       this.route.snapshot.queryParams.idCampagne + '&language=' + this.route.snapshot.queryParams.language;
      this.langue = this.route.snapshot.queryParams.language;
      this.campagneService.getCampagneWitchId(this.route.snapshot.queryParams.idCampagne).then(
        (data) => {
          this.campagne = data;
          this.partenerService.getPartnerWitchId(this.route.snapshot.queryParams.idStore).then(
            (data1) => {
              this.partner = data1;

              this.toDataURL(environment.apiCors + '/' +
              this.getValueTraduct(this.campagne.media,
                this.route.snapshot.queryParams.language), (dataUrl) => {
                this.imageCampagneBase64 = dataUrl;

                this.toDataURL(this.getValueTraduct(this.partner.qrCodeMarchand, this.route.snapshot.queryParams.language),
                (url: any) => {
                  this.qrCodeBase64 = url;

                  this.isLoading = false;
                });
              });
            }
          );
        }
      );
    }
  }

  generateImage(action){
    const node = document.getElementById('imageCopy');
    const pointe = this;
    htmlToImage.toPng(node)
      .then( (dataUrl)=> {
        const img = new Image(790,2670);
        img.src = dataUrl;
        document.getElementById('pdfTable').appendChild(img);
        if(action === 'download') { pointe.downloadAsPDF(); } else { pointe.printDiv(); }
      })
      .catch( (error)=> {
        console.error('oops, something went wrong!', error);
      });
  }

  downloadAsPDF() {
    const pdfTable = this.pdfTable.nativeElement;
    const html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html, pageSize: 'A4', pageMargins: [ 0, 0, 0, 0 ], margin: [0 , 0, 0, 0 ]};
    pdfMake.createPdf(documentDefinition as any).download();
  }

  printDiv() {
    const pdfTable = this.pdfTable.nativeElement;
    const html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html, pageSize: 'A4', pageMargins: [ 0, 0, 0, 0 ], margin: [0 , 0, 0, 0 ]};
    pdfMake.createPdf(documentDefinition as any).print();
  }

  shared() {
    navigator.share({
      title: 'Generator',
      text: '',
      url: location.pathname + this.extraLink
    });
  }

  transformNumberToString(nombre: number) {
    return nombre.toString().split('');
  }

  getValueTraduct(texte: string, langue: string) {
    const wrapper = document.createElement('div');
    wrapper.innerHTML= texte;
    return wrapper.getElementsByTagName(langue).length > 0 ? wrapper.getElementsByTagName(langue)[0].innerHTML : texte;
  }

  toDataURL(url, callback) {
    const xhRequest = new XMLHttpRequest();
    xhRequest.onload =  () =>{
      const reader = new FileReader();
      reader.onloadend =  () =>{
        callback(reader.result);
      };
      reader.readAsDataURL(xhRequest.response);
    };
    xhRequest.open('GET', url);
    xhRequest.responseType = 'blob';
    xhRequest.send();
  }
}
