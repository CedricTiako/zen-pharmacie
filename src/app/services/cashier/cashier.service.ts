import { Injectable } from '@angular/core';
import firebase from "firebase";
import {Cashier} from "../../models/cashier";

@Injectable({
  providedIn: 'root'
})
export class CashierService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('cashiers').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCashier() {
    return new Promise<Cashier[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('cashiers').onSnapshot(
        (docRef) => {
          const result: Cashier[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as Cashier);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getCashierWitchId(idCashier: string) {
    return new Promise<Cashier>((resolve, reject) => {
      firebase.firestore().collection('cashiers').doc(idCashier).onSnapshot(
        (docRef) => {
          resolve(docRef.data() as Cashier);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getCashierWitchIdPartner(idPartner: string) {
    return new Promise<Cashier[]>((resolve, reject) => {
      firebase.firestore().collection('cashiers').where('idPartner', '==', idPartner).onSnapshot(
        (docRef) => {
          const result: Cashier[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as Cashier);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
