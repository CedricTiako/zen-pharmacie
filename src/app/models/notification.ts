export class Notification {
  date: string;

  constructor(public id: string, public title: string, public logo: string, public status: number, public idUser: string[], public vu: string[], public content: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
