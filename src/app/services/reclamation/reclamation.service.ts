import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Reclamation} from '../../models/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  constructor() { }

  async add(reclamation: Reclamation) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('reclamation').doc(reclamation.id).set(Object.assign({}, reclamation)).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getReclamation(idUser: string) {
    return new Promise<Reclamation[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('reclamation').onSnapshot(
        (docRef) => {
          const result: Reclamation[] = [];
          docRef.forEach((doc) =>{
            result.push(doc.data() as Reclamation);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
