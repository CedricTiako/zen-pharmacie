export class GroupFees {
  date: string;

  constructor(public id: string, public idOperator: string, public name: string, public illustration: string, public content: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
