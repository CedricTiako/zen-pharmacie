import { Injectable } from '@angular/core';
import { Country } from '../../models/country';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('country').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCountry() {
    return new Promise<Country[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('country').onSnapshot(
        (docRef) => {
          const result: Country[] = [];
          docRef.forEach((doc) =>{
            result.push(doc.data() as Country);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCountryApp() {
    return new Promise<Country[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('country').where('isCountryApp', '==', 1).onSnapshot(
        (docRef) => {
          const result: Country[] = [];
          docRef.forEach((doc)=> {
            result.push(doc.data() as Country);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCountryWitchId(idPays: string) {
    return new Promise<Country>((resolve, reject) => {
      firebase.firestore().collection('country').doc(idPays).onSnapshot(
        (docRef) => {
          resolve(docRef.data() as Country);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
