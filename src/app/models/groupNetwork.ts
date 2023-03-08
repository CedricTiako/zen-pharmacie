export class GroupNetwork {
  date: string;

  constructor(public id: string, public name: string, public idOperator: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
