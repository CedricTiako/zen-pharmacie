export class ServiceAvailable {
  date: string;

  constructor(public id: string, public nom: string, public tags: string[], public status: number) {
    this.date = new Date().toString();
  }
}
