import { Optional } from "@angular/core";

export class Remittance {
  date: string;

  constructor(public id: string, public idCountry: string[], public status: number, public idFees: string, public idGroupPartner: string,@Optional() public created_by: string) {
    this.date = new Date().toString();
  }
}
