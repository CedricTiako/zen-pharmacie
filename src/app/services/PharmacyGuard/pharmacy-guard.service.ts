
import { Injectable, Optional } from '@angular/core';
import firebase from 'firebase';
import {PharmacyGuard} from '../../models/pharmacyGuard';
import { PartnerService } from './../pharmacy/partner.service';
import { Partner } from './../../models/partner';

@Injectable({
  providedIn: 'root'
})
export class PharmacyGuardService {

  constructor(public partnerService: PartnerService) { }

  async addpharmacyGuard(value: any) {
    console.log(value);
    return new Promise<void>((resolve, reject) => {
      // @ts-ignore
      firebase.firestore().collection('pharmacyGuard').doc().set(Object.assign({}, value)).then(
        () => {
          resolve();
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  async getpharmacyGuard(@Optional() idCity: string, @Optional() idCountry: string) {
    console.log(idCity +"  "+idCountry);
    return new Promise<Partner[]>((resolve, reject) => {
      // @ts-ignore
      let pharmacyGuard: any;
      const pharmacy: Partner[]=[];
      firebase.firestore().collection('pharmacyGuard').onSnapshot(
        (docRef) => {
          const result: PharmacyGuard[] = [];
          docRef.forEach((doc)=> {
             pharmacyGuard=doc.data() as PharmacyGuard;
             pharmacyGuard.id=doc.id;
              result.push(pharmacyGuard);
          });
          let partner;
          result.forEach((elt=>{
              this.partnerService.getPartnerWitchId(elt.idPharmacy).then(
                (val)=>{
                  partner = val as Partner;
                  partner.id=elt.idPharmacy;
                  if(idCity!=null && idCity!=='')
                  {
                    if(idCity===partner.idCity)
                    {
                      pharmacy.push(partner);
                    }
                  }
                  else if(idCountry!=null && idCountry!=='')
                  {
                    if(idCountry===partner.idCountry)
                    {
                      pharmacy.push(partner);
                    }
                  }
                  else{
                    console.log(partner);
                    pharmacy.push(partner);
                  }

                }
              );
          }));
          resolve(pharmacy as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }

  // async getpharmacyGuardByCity(idCity: string) {
  //   console.log(idCity);
  //   return new Promise<Partner[]>((resolve, reject) => {
  //     // @ts-ignore
  //     let pharmacyGuard: any;
  //     const pharmacy: Partner[]=[];
  //     firebase.firestore().collection('pharmacyGuard').where('idCity', '==', idCity).onSnapshot(
  //       (docRef) => {
  //         const result: PharmacyGuard[] = [];
  //         docRef.forEach((doc)=> {
  //            pharmacyGuard=doc.data() as PharmacyGuard;
  //            pharmacyGuard.id=doc.id;
  //             result.push(pharmacyGuard);
  //         });
  //         let partner;
  //         result.forEach((elt=>{
  //             this.partnerService.getPartnerWitchId(elt.idPharmacy).then(
  //               (val)=>{
  //                 partner = val as Partner;
  //                 partner.id=elt.idPharmacy;
  //                 pharmacy.push(partner);
  //               }
  //             );
  //         }));
  //         resolve(pharmacy as any);
  //       }, (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }


        // const pointe = this;
      // this.pharmGuardServ.getpharmacyGuard(this.city,null).then(
      //   (donnee) => {
      //     console.log(donnee);
      //     donnee.forEach((doc)=>
      //     {
      //       pointe.addPositionShop(doc.lat, doc.long, doc.logoPins, doc.name, doc);
      //     });
      //   }
      // );


  async getpharmacyGuardByCountry(idCountry: string) {
    return new Promise<PharmacyGuard[]>((resolve, reject) => {
      // @ts-ignore
      let pharmacyGuard: any;
      firebase.firestore().collection('pharmacyGuard').where('idCountry', '==', idCountry).onSnapshot(
        (docRef) => {
          const result: PharmacyGuard[] = [];
          docRef.forEach((doc)=> {
            pharmacyGuard=doc.data() as PharmacyGuard;
            pharmacyGuard.id=doc.id;
             result.push(pharmacyGuard);
          });
          resolve(result as any);
        }, (error) => {
          reject(error);
        }
      );
    });
  }
  // async getpharmacyGuard() {
  //   return new Promise<PharmacyGuard[]>((resolve, reject) => {
  //     // @ts-ignore
  //     let pharmacyGuard: any;
  //     firebase.firestore().collection('pharmacyGuard').onSnapshot(
  //       (docRef) => {
  //         const result: PharmacyGuard[] = [];
  //         docRef.forEach((doc) =>{
  //           pharmacyGuard=doc.data() as PharmacyGuard;
  //           pharmacyGuard.id=doc.id;
  //            result.push(pharmacyGuard);
  //         });
  //         resolve(result as any);
  //       }, (error) => {
  //         reject(error);
  //       }
  //     );
  //   });
  // }

  async getpharmacyGuardWitchId(idpharmacyGuard: string) {
    return new Promise<PharmacyGuard>((resolve, reject) => {
      firebase.firestore().collection('pharmacyGuard').doc(idpharmacyGuard).get().then(
        (docRef) => {
          resolve(docRef.data() as PharmacyGuard);
        },
        (error) => {
          reject(error);
        }
      );
    });
  }

}
