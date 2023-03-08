/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Optional } from '@angular/core';
export class City {
    date: string;

    countyId: string;
    constructor( public name: string,
      countyId: string,public region: string,
      public created_by: string,
      @Optional() public _id: string,
      public long: number,
      public lat: number,
      ) {
      this.date = new Date().toString();
      this.countyId=countyId;

    }

  }
