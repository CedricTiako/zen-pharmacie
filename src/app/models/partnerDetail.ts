export class PartnerDetail {
  date: string;

  constructor(public contacts: number[], 
              public address: string, 
              public openingDaysAndHours: string,
              public serviceAvailable: string[], 
              public otherInformation: string) {
    this.date = new Date().toString();
  }
}
