export class GroupMicroService {
  date: string;

  constructor(public id: string, public name: string, public description: string, public illustration: string, public status: number, public idOperator: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
