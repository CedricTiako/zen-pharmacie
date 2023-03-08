import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import firebase from 'firebase';
import {LogCaptureService} from './services/log-capture/log-capture.service';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private logCaptureService: LogCaptureService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {

      firebase.initializeApp(environment.firebaseConfig);


      // Activation de la persistance de donnée
      firebase.firestore().enablePersistence();
    });
  }

  eventHandler(event) {
    this.logCaptureService.getLogEvent(event);
    if (event.type === 'fullscreenchange') {
      /* gérer un passage en plein écran */
    } else /* fullscreenerror */ {
      /* gérer une erreur de passage en plein écran */
    }
  }
}
