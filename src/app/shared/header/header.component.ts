import { Component, OnInit } from '@angular/core';
import {NotificationService} from '../../services/notification/notification.service';
import {Notification} from '../../models/notification';
import {AuthentificationService} from '../../services/authentification/authentification.service';
import firebase from 'firebase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  menu = false;
  myNotif: Notification[] = [];
  isConnected = false;

  constructor(private notificationService: NotificationService, private authService: AuthentificationService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (dec) => {
        this.isConnected = dec;
        if(dec) {
          this.notificationService.getNotifications().then(
            (data) => {
              const pointe = this;
              data.forEach((doc) =>{
                if(!doc.data().vu.includes(firebase.auth().currentUser.email)) {
                  pointe.myNotif.push(doc.data());
                }
              });
            }
          );
        }
      }
    );
  }
}
