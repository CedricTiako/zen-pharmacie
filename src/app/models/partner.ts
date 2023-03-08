/* eslint-disable @typescript-eslint/naming-convention */
import { TheTime } from './time';
import {PartnerDetail} from './partnerDetail';
import { Optional } from '@angular/core';

export class Partner {
  date: string;
  qrCodeMarchand: string;
  codeMarchand: number;
  tags: string[];
  tagsHidden: string[];

  constructor(@Optional() public id: string,
              public name: string,
              public logo: string,
              public idCountry: string,
              public long: number,
              public lat: number,
              public logoPins: string,
              public subtitle: string,
              public cover: string,
              public content: PartnerDetail,
              public idFaq: string[],
              public time: TheTime,
              public created_by: string,
              public idCity: string,
              ) {
    this.date = new Date().toString();
    this.qrCodeMarchand = '';
    this.codeMarchand = 0;
    this.tags = [];
    this.tagsHidden = [];
  }
}
