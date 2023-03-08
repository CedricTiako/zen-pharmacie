/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { City } from '../../models/city';
import firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }

  async add(value: any) {
    // console.log(value);
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('city').doc().set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCity2() {
    return new Promise<City[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('city').onSnapshot(
        (docRef) => {
          const result: City[] = [];
          docRef.forEach((doc) =>{
            result.push(doc.data() as City);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCitiesCountry(idCountry: string) {
    return new Promise<City[]>((resolve, reject) => {
      // @ts-ignore
      let city: any;
      firebase.firestore().collection('city').where('countyId', '==', idCountry).onSnapshot(
        (docRef) => {
          const result: City[] = [];
          docRef.forEach((doc) =>{
            // console.log(doc.id);
            city=doc.data() as City;
            city._id=doc.id;
            // console.log(city);
            result.push(city);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCity() {
    return new Promise<City[]>((resolve, reject) => {
      // @ts-ignore
      let city: any;
      firebase.firestore().collection('city').onSnapshot(
        (docRef) => {
          const result: City[] = [];
          docRef.forEach((doc) =>{
            city=doc.data() as City;
            city._id=doc.id;
            // console.log(city);
            result.push(city);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  // async getProducts() {

  // return new Promise<City[]>((resolve, reject) => {
  //     // @ts-ignore
  //     firebase.firestore().collection('city')
  //     // This will return an Observable
  //     .onSnapshot() {
  //       for (let propName in changes) {
  //         /*let chng = changes[propName];
  //         let cur  = JSON.stringify(chng.currentValue);
  //         let prev = JSON.stringify(chng.previousValue);
  //         this.changeLog.push(`propName: currentValue = cur, previousValue = prev`);*/
  //       }
  //     }()
  //     .pipe(
  //       map(actions => {
  //         // actions is an array of DocumentChangeAction
  //         return actions.map(action => {
  //           const data = action.payload.doc.data() as Product;
  //           return {
  //             id: action.payload.doc.id,
  //             name: data.name,
  //             pictureId: data.pictureId
  //           };
  //         });
  //       })
  //     );
  //   });
  //   // return this.db
  //   //   .collection<Product>('city')
  //   //   // This will return an Observable
  //   //   .snapshotChanges()
  //   //   .pipe(
  //   //     map(actions => {
  //   //       // actions is an array of DocumentChangeAction
  //   //       return actions.map(action => {
  //   //         const data = action.payload.doc.data() as Product;
  //   //         return {
  //   //           id: action.payload.doc.id,
  //   //           name: data.name,
  //   //           pictureId: data.pictureId
  //   //         };
  //   //       });
  //   //     })
  //   //   );
  // }

  async getCityApp() {
    return new Promise<City[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('city').where('isCityApp', '==', 1).onSnapshot(
        (docRef) => {
          const result: City[] = [];
          docRef.forEach((doc)=> {
            result.push(doc.data() as City);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCityWitchId(idPays: string) {
    return new Promise<City>((resolve, reject) => {
      firebase.firestore().collection('city').doc(idPays).onSnapshot(
        (docRef) => {
          resolve(docRef.data() as City);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
