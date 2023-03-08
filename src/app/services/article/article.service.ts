import { Injectable } from '@angular/core';
import firebase from 'firebase';
import {Article} from '../../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor() { }

  async add(value: any) {
    // console.log(value);
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').doc().set(Object.assign({}, value)).then(
        (restult) => {
          // console.log(restult);
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getAllArticles() {
    return new Promise<Article[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach((doc) =>{
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          // console.log(result);
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getArticles(categorie: string) {
    return new Promise<Article[]>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('articles').where('categorie', '==', categorie).orderBy('date', 'desc').onSnapshot(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach((doc) =>{
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          // console.log(result);
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getArticleWitchTag(tag: string) {
    return new Promise<Article[]>((resolve, reject) => {
      firebase.firestore().collection('articles').where('tags', 'array-contains', tag).get().then(
        (docRef) => {
          const result: Article[] = [];
          docRef.forEach((doc)=> {
            if(doc.data().status !== 0) {
              result.push(doc.data() as Article);
            }
          });
          // console.log(result);
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getArticleWitchId(idArticle: string) {
    return new Promise<Article>((resolve, reject) => {
      firebase.firestore().collection('articles').doc(idArticle).get().then(
        (docRef) => {
          resolve(docRef.data() as Article);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
