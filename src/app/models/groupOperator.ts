export class GroupOperator {
  date: string;
  logo: string;

  constructor(public id: string, public name: string, public created_by: string) {
    this.date = new Date().toString();
    this.logo = '';
  }
}
