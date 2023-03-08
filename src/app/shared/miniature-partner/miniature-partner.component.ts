import {Component, Input, OnInit} from '@angular/core';
import {PartnerService} from '../../services/pharmacy/partner.service';
import {Partner} from '../../models/partner';
import {AuthentificationService} from "../../services/authentification/authentification.service";
import {User} from "../../models/user";
import {UserService} from "../../services/user/user.service";

@Component({
  selector: 'app-miniature-partner',
  templateUrl: './miniature-partner.component.html',
  styleUrls: ['./miniature-partner.component.scss'],
})
export class MiniaturePartnerComponent implements OnInit {

  @Input() idPartner: string;
  @Input() data: Partner = null;
  @Input() skin = 'item';

  currentUser: User;

  constructor(private partnerService: PartnerService, private authService: AuthentificationService, private userService: UserService) { }

  ngOnInit() {
    if(this.data === null && this.idPartner) {
      this.partnerService.getPartnerWitchId(this.idPartner).then(
        (data) => {
          this.data = data;
        }
      );
    }

    this.authService.isAuthenticated().then(
      (data) => {
        if(data) {
          this.userService.getCurrentUtilisateur().then(
            (data1) => {
              this.currentUser = data1;
            }
          );
        }
      }
    );
  }

  likeCurrentPartner() { /*
    const tmpCurrentUser = this.currentUser;
    if(tmpCurrentUser.editorsLikes.includes(this.currentEditor.id)) {
      tmpCurrentUser.editorsLikes.splice(tmpCurrentUser.editorsLikes.indexOf(this.currentEditor.id), 1);
    } else {
      tmpCurrentUser.editorsLikes.push(this.currentEditor.id);
    }
    this.userService.updateCurrentUser(this.currentUser).then(
      () => {
        this.currentUser = tmpCurrentUser;
      }
    );*/
  }

}
