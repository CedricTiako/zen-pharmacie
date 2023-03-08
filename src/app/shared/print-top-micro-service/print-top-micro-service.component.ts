import { Component, OnInit } from '@angular/core';
import {PartnerService} from "../../services/pharmacy/partner.service";
import {Partner} from "../../models/partner";
import {Article} from "../../models/article";
import {CategoryPartner} from "../../models/categoryPartner";

@Component({
  selector: 'app-print-top-micro-service',
  templateUrl: './print-top-micro-service.component.html',
  styleUrls: ['./print-top-micro-service.component.scss'],
})
export class PrintTopMicroServiceComponent implements OnInit {

  partners: Partner[] = [];
  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 20,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getCategoryPartner().then(
      (data0) => {
        const pointe = this;

        this.partnerService.getPartner().then(
          (data) => {
            data.forEach(function(doc) {
              if(pointe.verifyIsContainValue(data0, doc)) {
                pointe.partners.push(doc);
              }
            });
          }
        );
      }
    );
  }

  verifyIsContainValue(tab: CategoryPartner[], value: Partner): boolean {
    for(let i=0; i<tab.length; i++) {
      if(tab[i].type === 'service' ) { return  true; }
    }
  }

}
