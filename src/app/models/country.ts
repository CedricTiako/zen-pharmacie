/* eslint-disable @typescript-eslint/naming-convention */

export class Country {
  date: string;

  constructor(public id: string, public name: string,
    public code: number, public flag: string, public isCountryApp: number,
    public created_by: string) {
    this.date = new Date().toString();
  }
}
