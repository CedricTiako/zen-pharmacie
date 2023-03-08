import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Campagne} from '../../models/campagne';

@Injectable({
  providedIn: 'root'
})
export class CampagneService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('campagnes').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCampagnes() {
    return new Promise<Campagne[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('campagnes').where('status','==', 1).onSnapshot(
        (docRef) => {
          const result: Campagne[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as Campagne);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCampagneWitchId(idCampagne: string) {
    return new Promise<Campagne>((resolve, reject) => {
      firebase.firestore().collection('campagnes').doc(idCampagne).onSnapshot(
        (docRef) => {
          resolve(docRef.data() as Campagne);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
