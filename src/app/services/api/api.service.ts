import { Injectable } from '@angular/core';
import {SafeResourceUrl} from '@angular/platform-browser';
import firebase from 'firebase';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getDataWitchApi(link, type: any = 'text') {
    const headers = new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    return new Promise<void>((resolve, reject) => {
      this.http.get('https://hidden-castle-88131.herokuapp.com' + '/' + link, {headers, responseType: type}).subscribe({
        next: (res: any) => {
          resolve(res);
        },
        error: (err: any) => {
          reject(err);
        }
      });
    });
  }

  async addImageForAdresseId(name: string, adresse: string, image: SafeResourceUrl ) {
    // @ts-ignore
    return new Promise<string>((resolve, reject) => {
      if(image === '') {
        resolve('');
      } else {
        const imgStorageRef = firebase.storage().ref(adresse + '/' + name + '.png');
        const newPhoto: string = image.toString().substring(image.toString().indexOf('base64,') + 7, image.toString().indexOf('(see ') - 1);
        return imgStorageRef.putString(newPhoto, 'base64', {contentType: 'image/png'}).then(
          () => imgStorageRef.getDownloadURL().then(downloadUrl => {
              resolve(downloadUrl);
            }),
          (error) => {
            reject(error);
          }
        );
      }
    });
  }
}
