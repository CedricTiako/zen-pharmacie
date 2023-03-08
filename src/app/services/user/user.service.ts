import { Injectable } from '@angular/core';
import { User } from '../../models/user';
import firebase from 'firebase';

declare const reload: any;
@Injectable({
  providedIn: 'root'
})
export class UserService {

  async getUtilisateurWitchPhoneNumber(numero: string) {
    return new Promise<User>((resolve, reject) => {
      firebase.firestore().collection('comptes').where('phone', '==', numero).onSnapshot(
        (docRef) => {
          const result: Comment[] = [];
          docRef.forEach((doc) =>{
            result.push(doc.data() as Comment);
          });
          resolve(result.length > 0 ? result[0] as any : null);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getUtilisateurWitchId(id: string) {
    return new Promise<User>((resolve, reject) => {
      firebase.firestore().collection('comptes').doc(id).get().then(
        (docRef) => {
          resolve(docRef.data() as User);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }


  reload(): void
  {
    reload();
  }

  updateCurrentUser(userUpdate: User) {
    return new Promise<void>((resolve, reject) => {
      firebase.firestore().collection('comptes').doc(localStorage.getItem('id')).set(Object.assign({}, userUpdate)).then(
        () => {
          resolve( );
          // this.reload();
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

  async getCurrentUtilisateur() {
    return new Promise<User>((resolve, reject) => {
      firebase.firestore().collection('comptes').doc(localStorage.getItem('id')).get().then(
        (docRef) => {
          resolve(docRef.data() as User);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }
}
