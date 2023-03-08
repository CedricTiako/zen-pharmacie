export class Faq {
  date: string;

  constructor(public id: string, public title: string, public content: string, public status: number, public created_by: string) {
    this.date = new Date().toString();
  }
}
