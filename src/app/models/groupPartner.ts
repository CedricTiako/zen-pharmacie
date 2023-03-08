export class GroupPartner {
  date: string;

  constructor(public id: string, public name: string, public logo: string, public channels: string[], public idFees: string, public idOperator: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
