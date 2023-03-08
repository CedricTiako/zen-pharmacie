import { Component, OnInit } from '@angular/core';
import {NotificationService} from "../services/notification/notification.service";
import {Notification} from "../models/notification";
import {AuthentificationService} from "../services/authentification/authentification.service";
import firebase from "firebase";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.page.html',
  styleUrls: ['./notifications.page.scss'],
})
export class NotificationsPage implements OnInit {

  myNotification: Notification[] = [];
  curentEmailUser: string;

  constructor(private notificationService: NotificationService, private authService: AuthentificationService) { }

  ngOnInit() {
    this.authService.isAuthenticated().then(
      (rep) => {
        if(rep) {
          this.curentEmailUser = firebase.auth().currentUser.email;
          this.notificationService.getNotifications().then(
            (data) => {
              this.myNotification = data as any;
            }
          );
        }
      }
    );
  }

}
