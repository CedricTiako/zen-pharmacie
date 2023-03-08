import {Component, Input, OnInit} from '@angular/core';
import {PartnerService} from "../../services/pharmacy/partner.service";
import {AlertController} from "@ionic/angular";
import {ActivatedRoute} from "@angular/router";
import {CategoryPartner} from "../../models/categoryPartner";

@Component({
  selector: 'app-print-category-partner',
  templateUrl: './print-category-partner.component.html',
  styleUrls: ['./print-category-partner.component.scss'],
})
export class PrintCategoryPartnerComponent implements OnInit {

  @Input() typeCategorie = '';

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 0,
    spaceBetween: 10,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10
  };

  categorieSelect = '';
  categoryPartner: CategoryPartner[] = [];

  constructor(private partnerService: PartnerService, private alertController: AlertController, private route: ActivatedRoute) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.category) {
      this.categorieSelect = this.route.snapshot.queryParams.category;
    }
    this.partnerService.getCategoryPartner().then(
      (data1) => {
        for(let i=0; i<data1.length; i++) {
          if(this.typeCategorie === '' || data1[i].type === this.typeCategorie) {
            this.categoryPartner.push(data1[i]);
          }
        }
      }
    );
  }

  setCategorieSelectGlobal(value) {
    this.categorieSelect = value;
  }
}
