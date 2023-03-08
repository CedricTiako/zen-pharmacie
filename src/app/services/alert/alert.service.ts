import { Injectable } from '@angular/core';
import {ToastController} from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private toastController: ToastController) { }

  async print(texte: string,succes?: boolean) {
    const toast = await this.toastController.create({
      message: texte,
      duration: 2000,
      position: 'top',
      translucent: false,
      color:succes?'success':'warning',
    });
    await toast.present();
  }
}
