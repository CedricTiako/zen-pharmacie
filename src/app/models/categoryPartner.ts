export class CategoryPartner {
  date: string;

  constructor(public id: string, public name: string, public illustration: string, public type: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
