import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommunFunctionService {

  constructor(public router: Router) { }

  /**
  * cette fonction permet de rediriger la navigation vers un Url precise 
   * @param urlChemin :: String chemin de lurl qu'on veux atteindre
   */
  redirectTo(urlChemin: string) {
    // this.router.navigate([urlChemin]).then(x=>console.log(x));
    this.router.navigateByUrl(urlChemin);
  }


}
