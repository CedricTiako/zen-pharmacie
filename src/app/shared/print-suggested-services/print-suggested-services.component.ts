import { Component, OnInit } from '@angular/core';
import {Partner} from "../../models/partner";
import {PartnerService} from "../../services/pharmacy/partner.service";
import {CategoryPartner} from "../../models/categoryPartner";

@Component({
  selector: 'app-print-suggested-services',
  templateUrl: './print-suggested-services.component.html',
  styleUrls: ['./print-suggested-services.component.scss'],
})
export class PrintSuggestedServicesComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 1.7,
    spaceBetween: 3,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pager: true,
    scrollbar: true,
    //autoplay:true
  };

  allSS: Partner[] = [];

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    this.partnerService.getCategoryPartner().then(
      (data0) => {
        const pointe = this;

        this.partnerService.getPartner().then(
          (data) => {
            data.forEach(function(doc) {
              if(pointe.verifyIsContainValue(data0, doc)) {
                pointe.allSS.push(doc);
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
