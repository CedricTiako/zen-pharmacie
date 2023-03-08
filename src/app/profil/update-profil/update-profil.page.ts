import { Component, OnInit } from '@angular/core';
import {NavController} from '@ionic/angular';
import {UserService} from '../../services/user/user.service';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-update-profil',
  templateUrl: './update-profil.page.html',
  styleUrls: ['./update-profil.page.scss'],
})
export class UpdateProfilPage implements OnInit {

  isLoading = false;
  currentUser: User;

  constructor(private navCtrl: NavController, private authService: AuthentificationService, private userService: UserService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (donnee) => {
        if(donnee) {
          this.userService.getCurrentUtilisateur().then(
            (data) => {
              this.currentUser = data;
              this.isLoading = false;
            }
          );
        }
      }
    );
  }

  save() {
    this.isLoading = true;
    this.userService.updateCurrentUser(this.currentUser).then(
      () => {
        this.isLoading = false;
        //this.navCtrl.back();
        location.reload();
      }
    );
  }

}
