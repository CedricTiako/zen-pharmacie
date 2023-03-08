/* eslint-disable object-shorthand */
/* eslint-disable curly */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable no-underscore-dangle */
import { BouttonTchatComponent } from './../boutton-tchat/boutton-tchat.component';
/* eslint-disable prefer-const */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/prefer-for-of */
/* eslint-disable no-trailing-spaces */
import {Component, Input, OnInit} from '@angular/core';
import {PartnerService} from '../../services/pharmacy/partner.service';
import {Partner} from '../../models/partner';
import {ToolsService} from '../../services/tools/tools.service';
import { PharmacyGuardService } from '../../services/PharmacyGuard/pharmacy-guard.service';
import { MapGeocoder,GoogleMap } from '@angular/google-maps';

@Component({
  selector: 'app-list-partner',
  templateUrl: './list-partner.component.html',
  styleUrls: ['./list-partner.component.scss'],
})
export class ListPartnerComponent implements OnInit {

  @Input() tags: string[] = [];
  @Input() categorie = '';
  @Input() openNow = true;
  @Input() city = '';
  map: GoogleMap;
  partners: Partner[] = [];
  distance: any={};
  dist: any={};
  distances: any[]=[{}];
  latitude = 0;
  longitude = 0;
  // contenu_bon: boolean;
  // contenu_pas_bon: boolean;

  listePartnerWitchDiastance: any[] = [];
  bounds = new google.maps.LatLngBounds();
  markersArray: google.maps.Marker[] = [];
  service = new google.maps.DistanceMatrixService();
  constructor(private geoCoder: MapGeocoder,private pharmGuardServ: PharmacyGuardService,private partnerService: PartnerService) { }

  ngOnInit() {
    navigator.geolocation.getCurrentPosition((position) => {
      this.latitude = position.coords.latitude;
      this.longitude = position.coords.longitude;



      const paysSelected =localStorage.getItem('paysSelect');


      if(this.city!=null && this.city!=='')
      {

        this.partnerService.getPartnerByCity(this.city).then(
          (docRef) => {
            const pointe = this;
            docRef.forEach((doc) =>{
              if(pointe.tags.length > 0) {
                pointe.tags.forEach((doc1) =>{
                  if((pointe.categorie === '') && doc.tagsHidden.includes(doc1)) {
                    //pointe.partners.push(doc);
                    let status='';
                    const timeElapsed = Date.now();
                    const today = new Date(timeElapsed);
                    const start: Date = new Date(doc.time._open_time);  
                    const end: Date = new Date(doc.time._close_time);
                    const tsO = start.getHours();
                    const tsF = end.getHours();
                    const tsA = today.getHours();
                    let min='00';
                    if((tsF-tsO)<(tsA-tsO))
                    {
                      if(start.getMinutes()>0)
                        min=start.getMinutes().toString();
                      status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
                      // logoPin='assets/img/Location-red.svg';
                    }
                    else
                    {
                      if(end.getMinutes()>0)
                        min=end.getMinutes().toString();
                      status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
                      // logoPin='assets/img/Location-green.svg';
                    }
                    pointe.listePartnerWitchDiastance.push({partner: doc,status:status,
                      distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      //pointe.distance=null;
                  }
                });
              } else {
                if(pointe.categorie === ''  ) {
                  //pointe.partners.push(doc);
                  let status='';
                  const timeElapsed = Date.now();
                  const today = new Date(timeElapsed);
                  const start: Date = new Date(doc.time._open_time);  
                  const end: Date = new Date(doc.time._close_time);
                  const tsO = start.getHours();
                  const tsF = end.getHours();
                  const tsA = today.getHours();
                  let min='00';
                  if((tsF-tsO)<(tsA-tsO))
                  {
                    if(start.getMinutes()>0)
                      min=start.getMinutes().toString();
                    status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
                    // logoPin='assets/img/Location-red.svg';
                  }
                  else
                  {
                    if(end.getMinutes()>0)
                      min=end.getMinutes().toString();
                    status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
                    // logoPin='assets/img/Location-green.svg';
                  }
                  pointe.listePartnerWitchDiastance.push({partner: doc,status:status,
                    distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      //pointe.distance=null;
                }
              }
            });
            this.listePartnerWitchDiastance = this.trieTableau(this.listePartnerWitchDiastance);
          }
        );
      }
      else if( paysSelected !==null)
      {
        const pointe = this;
        this.pharmGuardServ.getpharmacyGuard(null,paysSelected).then(
          (donnee) => {
            console.log(donnee);
            donnee.forEach((doc)=>
            {
              let status='';
              const timeElapsed = Date.now();
              const today = new Date(timeElapsed);
              const start: Date = new Date(doc.time._open_time);  
              const end: Date = new Date(doc.time._close_time);
              const tsO = start.getHours();
              const tsF = end.getHours();
              const tsA = today.getHours();
              let min='00';
              if((tsF-tsO)<(tsA-tsO))
              {
                if(start.getMinutes()>0)
                  min=start.getMinutes().toString();
                status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
                // logoPin='assets/img/Location-red.svg';
              }
              else
              {
                if(end.getMinutes()>0)
                  min=end.getMinutes().toString();
                status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
                // logoPin='assets/img/Location-green.svg';
              }
              pointe.listePartnerWitchDiastance.push({partner: doc,status:status,
                distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                //pointe.distance=null;
            });
          }
        );
        this.partnerService.getPartnerByCountry(paysSelected).then(
          (docRef) => {
            // const pointe = this;
            docRef.forEach((doc) =>{
              if(pointe.tags.length > 0) {
                pointe.tags.forEach((doc1) =>{
                  if((pointe.categorie === '') && doc.tagsHidden.includes(doc1)) {
                    //pointe.partners.push(doc);
                    let status='';
                    const timeElapsed = Date.now();
                    const today = new Date(timeElapsed);
                    const start: Date = new Date(doc.time._open_time);  
                    const end: Date = new Date(doc.time._close_time);
                    const tsO = start.getHours();
                    const tsF = end.getHours();
                    const tsA = today.getHours();
                    let min='00';
                    if((tsF-tsO)<(tsA-tsO))
                    {
                      if(start.getMinutes()>0)
                        min=start.getMinutes().toString();
                      status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
                      // logoPin='assets/img/Location-red.svg';
                    }
                    else
                    {
                      if(end.getMinutes()>0)
                        min=end.getMinutes().toString();
                      status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
                      // logoPin='assets/img/Location-green.svg';
                    }
                    pointe.listePartnerWitchDiastance.push({partner: doc,status:status,
                      distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      //pointe.distance=null;
                  }
                });
              } else {
                if(pointe.categorie === ''  ) {
                  //pointe.partners.push(doc);
                  let status='';
                  const timeElapsed = Date.now();
                  const today = new Date(timeElapsed);
                  const start: Date = new Date(doc.time._open_time);  
                  const end: Date = new Date(doc.time._close_time);
                  const tsO = start.getHours();
                  const tsF = end.getHours();
                  const tsA = today.getHours();
                  let min='00';
                  if((tsF-tsO)<(tsA-tsO))
                  {
                    if(start.getMinutes()>0)
                      min=start.getMinutes().toString();
                    status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
                    // logoPin='assets/img/Location-red.svg';
                  }
                  else
                  {
                    if(end.getMinutes()>0)
                      min=end.getMinutes().toString();
                    status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
                    // logoPin='assets/img/Location-green.svg';
                  }
                  pointe.listePartnerWitchDiastance.push({partner: doc,status:status,
                    distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      //pointe.distance=null;
                }
              }
            });
            this.listePartnerWitchDiastance = this.trieTableau(this.listePartnerWitchDiastance);
          }
        );
      }
      else
      {
        this.partnerService.getPartner().then(
          (docRef) => {
            const pointe = this;
            docRef.forEach((doc) =>{
              if(pointe.tags.length > 0) {
                pointe.tags.forEach((doc1) =>{
                  if((pointe.categorie === '') && doc.tagsHidden.includes(doc1)) {
                    //pointe.partners.push(doc);
                    let status='';
                    const timeElapsed = Date.now();
                    const today = new Date(timeElapsed);
                    const start: Date = new Date(doc.time._open_time);  
                    const end: Date = new Date(doc.time._close_time);
                    const tsO = start.getHours();
                    const tsF = end.getHours();
                    const tsA = today.getHours();
                    let min='00';
                    if((tsF-tsO)<(tsA-tsO))
                    {
                      if(start.getMinutes()>0)
                        min=start.getMinutes().toString();
                      status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
                      // logoPin='assets/img/Location-red.svg';
                    }
                    else
                    {
                      if(end.getMinutes()>0)
                        min=end.getMinutes().toString();
                      status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
                      // logoPin='assets/img/Location-green.svg';
                    }
                    pointe.listePartnerWitchDiastance.push({partner: doc,status:status,
                      distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      //pointe.distance=null;
                  }
                });
              } else {
                if(pointe.categorie === ''  ) {
                  
    let status='';
    const timeElapsed = Date.now();
    const today = new Date(timeElapsed);
    const start: Date = new Date(doc.time._open_time);  
    const end: Date = new Date(doc.time._close_time);
    const tsO = start.getHours();
    const tsF = end.getHours();
    const tsA = today.getHours();
    let min='00';
    if((tsF-tsO)<(tsA-tsO))
    {
      if(start.getMinutes()>0)
        min=start.getMinutes().toString();
      status="<span class=\"text-red-700\">Close</span> - Open at " + (start.getHours()+ "h:" + min+" ");
      // logoPin='assets/img/Location-red.svg';
    }
    else
    {
      if(end.getMinutes()>0)
        min=end.getMinutes().toString();
      status="<span class=\"text-green-700\">Open</span> - Close at " + (end.getHours()+ "h:" + min +" " );
      // logoPin='assets/img/Location-green.svg';
    }
                  pointe.listePartnerWitchDiastance.push({partner: doc,
                    status:status,
                    distance: pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat})});
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      // pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      pointe.distances.push(pointe.getDistanceMatrix({lng :  position.coords.longitude,lat : position.coords.latitude},{lng : doc.long,lat :doc.lat}));
                      //pointe.distance=null;
                }
              }
            });
            this.listePartnerWitchDiastance = this.trieTableau(this.listePartnerWitchDiastance);
          }
        );
      }
    });
    console.log(this.distances);
  }

  trieTableau(tableau: any[]) {
    return tableau.sort((a, b) => a.distance - b.distance).reverse();
  }

  generateNumber(min, max) {
    const gid = new ToolsService();
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  getDistanceBetweenPoints(latitude1, longitude1, latitude2, longitude2) {
    const theta = longitude1 - longitude2;
    const distance = 60 * 1.1515 * (180/Math.PI) * Math.acos(
      Math.sin(latitude1 * (Math.PI/180)) * Math.sin(latitude2 * (Math.PI/180)) +
      Math.cos(latitude1 * (Math.PI/180)) * Math.cos(latitude2 * (Math.PI/180)) * Math.cos(theta * (Math.PI/180))
    );
    return Math.round(distance);
    /*if (Math.round(distance) < 1000) {
      return Math.round(distance) + ' m';
    } else if (Math.round(distance) > 1000) {
      return Math.round(distance * 1.609344) + ' km';
    }*/
  }

  getDistanceMatrix(
    destinationA: any,
    destinationB: google.maps.LatLngLiteral = { lat: 50.087, lng: 14.421},
   ): any {
    const pointe = this;
  let val: any={};
  const request = {
    origins: [destinationA],
    destinations: [destinationB],
    travelMode: google.maps.TravelMode.WALKING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };
  // put request on page
  // (document.getElementById('request') as HTMLDivElement).innerText =
  //   JSON.stringify(request, null, 2);

  // get distance matrix response
  this.service.getDistanceMatrix(request).then(async (response) =>  {
      // put response
      
      const result=response.rows[0].elements[0];

        pointe.distance[google.maps.TravelMode.WALKING]=result;
        // val=pointe.distance;
        val[google.maps.TravelMode.WALKING]= await result;
        pointe.dist=JSON.stringify(pointe.distance);

    console.log(pointe.dist)   ;
    // console.log( pointe.dist);
    // show on map
    // const originList = response.originAddresses;
    // const destinationList = response.destinationAddresses;
    // this.deleteMarkers(this.markersArray);
    // const showGeocodedAddressOnMap = (asDestination: boolean) => {
    //   const handler = ({ results }: google.maps.GeocoderResponse) => {
    //     this.map.fitBounds(this.bounds.extend(results[0].geometry.location));
    //     this.markersArray.push(
    //       new google.maps.Marker({
    //         position: results[0].geometry.location,
    //         label: asDestination ? 'D' : 'O',
    //       })
    //     );
    //   };

    //   return handler;
    // };

    // for (let i = 0; i < originList.length; i++) {
    //   const results = response.rows[i].elements;

    //   this.geoCoder
    //     .geocode({ address: originList[i] })
    //     .subscribe(showGeocodedAddressOnMap(false));

    //   for (let j = 0; j < results.length; j++) {
    //     this.geoCoder
    //       .geocode({ address: destinationList[j] })
    //       .subscribe(showGeocodedAddressOnMap(true));
    //   }
    // }
  });

  const request2 = {
    origins: [destinationA],
    destinations: [destinationB],
    travelMode: google.maps.TravelMode.DRIVING,
    unitSystem: google.maps.UnitSystem.METRIC,
    avoidHighways: false,
    avoidTolls: false,
  };
  // put request on page
  // (document.getElementById('request') as HTMLDivElement).innerText =
  //   JSON.stringify(request, null, 2);

  // get distance matrix response
  this.service.getDistanceMatrix(request2).then(async (response) =>  {
      // put response
      
      const result=response.rows[0].elements[0];

        // pointe.distance[google.maps.TravelMode.DRIVING]=result;
        // // val=pointe.distance;
        val[google.maps.TravelMode.DRIVING]= await result;
        // pointe.dist=JSON.stringify(pointe.distance);

    console.log(pointe.dist)   ;
    // console.log( pointe.dist);
    // show on map
    // const originList = response.originAddresses;
    // const destinationList = response.destinationAddresses;
    // this.deleteMarkers(this.markersArray);
    // const showGeocodedAddressOnMap = (asDestination: boolean) => {
    //   const handler = ({ results }: google.maps.GeocoderResponse) => {
    //     this.map.fitBounds(this.bounds.extend(results[0].geometry.location));
    //     this.markersArray.push(
    //       new google.maps.Marker({
    //         position: results[0].geometry.location,
    //         label: asDestination ? 'D' : 'O',
    //       })
    //     );
    //   };

    //   return handler;
    // };

    // for (let i = 0; i < originList.length; i++) {
    //   const results = response.rows[i].elements;

    //   this.geoCoder
    //     .geocode({ address: originList[i] })
    //     .subscribe(showGeocodedAddressOnMap(false));

    //   for (let j = 0; j < results.length; j++) {
    //     this.geoCoder
    //       .geocode({ address: destinationList[j] })
    //       .subscribe(showGeocodedAddressOnMap(true));
    //   }
    // }
  });

  // console.log(val);
  return val;
}

deleteMarkers(markersArray: google.maps.Marker[]) {
  for (let i = 0; i < markersArray.length; i++) {
    markersArray[i].setMap(null);
  }

  markersArray = [];
}

}
