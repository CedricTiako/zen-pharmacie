export class Network {
  date: string;

  constructor(public id: string, public title: string, public content: string, public status: number, public idOperator: string, public media: string[], public typeMedia: string[], public idGroupeNetwork: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
