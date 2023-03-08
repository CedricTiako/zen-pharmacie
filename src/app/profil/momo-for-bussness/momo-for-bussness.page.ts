import {Component, OnInit} from '@angular/core';
import {CampagneService} from '../../services/campagne/campagne.service';
import {Campagne} from '../../models/campagne';
import {UserService} from '../../services/user/user.service';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {PartnerService} from '../../services/pharmacy/partner.service';
import {Partner} from '../../models/partner';


@Component({
  selector: 'app-momo-for-bussness',
  templateUrl: './momo-for-bussness.page.html',
  styleUrls: ['./momo-for-bussness.page.scss'],
})
export class MomoForBussnessPage implements OnInit {

  campagnes: Campagne[] = [];
  partner: Partner[] = [];

  constructor(private userService: UserService,
    private partnerService: PartnerService,
    private campagneService: CampagneService,
    private authService: AuthentificationService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (lala) => {
        if(lala) {
          this.userService.getCurrentUtilisateur().then(
            (mmm) => {
              this.partnerService.getPartner().then(
                (ouistiti) => {
                  const pointe = this;
                  ouistiti.forEach((doc)=>{
                    if(doc.content.contacts.toString().indexOf(mmm.phone as string) !== -1) {
                      pointe.partner.push(doc as Partner);
                    }
                  });
                }
              );
            }
          );
        }
      }
    );

    this.campagneService.getCampagnes().then(
      (data) => {
        this.campagnes = data;
      }
    );
  }

}
