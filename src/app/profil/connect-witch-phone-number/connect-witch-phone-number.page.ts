import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {WindowService} from '../../services/window/window.service';
import {AlertService} from '../../services/alert/alert.service';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import firebase from 'firebase';
import {ToolsService} from '../../services/tools/tools.service';
import {User} from '../../models/user';

@Component({
  selector: 'app-connect-witch-phone-number',
  templateUrl: './connect-witch-phone-number.page.html',
  styleUrls: ['./connect-witch-phone-number.page.scss'],
})
export class ConnectWitchPhoneNumberPage implements OnInit {

  windowRef: any;
  isAskCode = false;
  numeroPhone: string;
  isLoading = false;

  constructor(private router: Router, private alertService: AlertService, private windowService: WindowService, private authService: AuthentificationService) { }

  //Initiate windowRef from WindowService
  async ionViewWillEnter() {
    this.windowRef = await this.windowService.windowRef;
    this.windowRef.recaptchaVerifier = await new firebase.auth.RecaptchaVerifier('recaptcha-container', {
      size: 'invisible'
    });
    await this.windowRef.recaptchaVerifier.render();
  }

  sendLoginCode(form){
    this.isLoading = true;
    this.authService.numberAuth('+' + form.value.countryCode.toString() + form.value.phone.toString(), this.windowRef).then(
      (data) => {
        this.numeroPhone = form.value.phone.toString();
        this.windowRef.confirmationResult = data;
        this.isAskCode = true;
        this.isLoading = false;
      }, (error) => {
        this.alertService.print(error,false);
        this.isLoading = false;
        this.windowRef.recaptchaVerifier.render().then(function(widgetId) {
          this.windowRef.reset(widgetId);
        });
      }
    );
  }

  submitVerif(form) {
    this.isLoading = true;
    this.windowRef.confirmationResult.confirm(form.value.verifCode.toString())
      .then(
        (result) => {
          localStorage.setItem('id', result.user.phoneNumber);
          this.authService.isRegister(this.numeroPhone.toString()).then(
            (data) => {
              if(data) {
                this.router.navigateByUrl('tabs/home');
              } else {
                const gid = new ToolsService();
                const tmpUser = new User('user-' + gid.generateId(4).toString(), result.user.phoneNumber, '', 1, '0000', 'phone');
                this.authService.saveToDataBase(tmpUser).then(
                  () => {
                    this.router.navigateByUrl('tabs/home');
                  }, (error) => {
                    this.alertService.print(error,false);
                  }
                );
              }
            }
          );
        }, (error) => {
          this.isLoading = false;
          this.alertService.print(error,false);
        });
  }

  ngOnInit() {
  }

}
