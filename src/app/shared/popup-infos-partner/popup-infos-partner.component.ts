import {Component, Input, OnInit} from '@angular/core';
import {Partner} from '../../models/partner';
import {PartnerService} from '../../services/partner.service';

@Component({
  selector: 'app-popup-infos-partner',
  templateUrl: './popup-infos-partner.component.html',
  styleUrls: ['./popup-infos-partner.component.scss'],
})
export class PopupInfosPartnerComponent implements OnInit {

  @Input() data: Partner;
  @Input() idPartner: string;

  constructor(private partnerService: PartnerService) { }

  ngOnInit() {
    if(!this.data && this.idPartner) {
      this.partnerService.getPartnerWitchId(this.idPartner).then(
        (donnee) => {
          this.data = donnee;
        }
      );
    }
  }

}
