import { Injectable } from '@angular/core';
import {Poll} from '../../models/poll';
import firebase from 'firebase';
import {PostProof} from '../../models/postProof';

@Injectable({
  providedIn: 'root'
})
export class PostProofService {

  constructor() { }

  async add(postproof: PostProof) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('post-proof').doc(postproof.id).set(Object.assign({}, postproof)).then(
        () => {
          resolve();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getPostProofWitchIdUser(idUser: string) {
    return new Promise<PostProof[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('post-proof').where('auteur', '==', idUser).onSnapshot(
        (docRef) => {
          const result: PostProof[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as PostProof);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getPostProof() {
    return new Promise<PostProof[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('post-proof').onSnapshot(
        (docRef) => {
          const result: PostProof[] = [];
          docRef.forEach(function(doc) {
            result.push(doc.data() as PostProof);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
}
