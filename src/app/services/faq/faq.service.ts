import { Injectable } from '@angular/core';
import firebase from "firebase";
import {Faq} from "../../models/faq";

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor() { }

  async add(value: any) {
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('faq').doc(value.id).set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getFaq() {
    return new Promise<Faq[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('faq').onSnapshot(
        (docRef) => {
          const result: Faq[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as Faq);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getFaqWitchId(idFaq: string) {
    return new Promise<Faq>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('faq').doc(idFaq).onSnapshot(
        (docRef) => {
          resolve(docRef.data() as Faq);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
