import { Optional } from '@angular/core';
import { TheTime } from './time';

export class PharmacyGuard {


  constructor(
              public startDay: Date,
              public endDay: Date,
              public idPharmacy: string,
              @Optional() public id: string,
              ) {
  }
}
