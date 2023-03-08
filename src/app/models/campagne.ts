export class Campagne {
  date: string;

  constructor(public id: string, public name: string, public status: number, public media: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
