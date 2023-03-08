import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { User } from '../models/user';
import { AlertService } from '../services/alert/alert.service';
import {UserService} from "../services/user/user.service";
import {AuthentificationService} from "../services/authentification/authentification.service";
import {environment} from '../../environments/environment';
declare function getMsisdn(): any;
declare function getCountry(): any;
declare const globalUserName: any;
declare const avatarUser: any;

@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  isLoading = true;
  user: User = null;
  environment = environment;

  constructor(private alertService: AlertService, private userService: UserService, private alertController: AlertController, private authService: AuthentificationService) {}

  ngOnInit(): void {
    this.authService.isAuthenticated().then(
      (result) => {
        if(result) {
          this.userService.getCurrentUtilisateur().then(
            (data) => { console.log('oui oui ' + data);
              this.user = data;
              if(this.user.typeInscription === 'ayoba') { this.user.photo = avatarUser; }
              this.isLoading = false;
            }
          );
        } else { this.isLoading = false; }
      }
    );
  }

  lrgoogle() {
    this.isLoading = true;
    this.authService.googleAuth().then(
      () => {
        location.reload();
      },
      (error) => {
        this.isLoading = false;
        this.alertService.print(error,false);
      }
    );
  }

  shared() {
    navigator.share({
      title: 'Pharmacy Africa',
      text: '',
      url: window.location.hostname
    });
  }

  findUs() {
    alert('Zen africa, Cameroon - Douala');
  }

  async confirmDeconnexion() {

    const alert = await this.alertController.create({
      header: 'Disconnection',
      message: 'You are about to disconnect, do you want to continue?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'OK',
          handler: () => {
            this.authService.signOut().then();
            localStorage.clear();
            location.reload();
          }
        }
      ]
    });

    await alert.present();
  }

}
