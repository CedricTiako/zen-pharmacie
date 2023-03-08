export class Poll {

  date: string;
  choice1: string[];
  choice2: string[];
  choice3: string[];
  choice4: string[];
  choice5: string[];

  constructor(public id: string, public title: string, public customResponses: string[], public top: number, public photo: string, public status: number, public idOperator: string, public created_by: string) {
    this.date = new Date().toString();
    this.choice1 = [];
    this.choice2 = [];
    this.choice3 = [];
    this.choice4 = [];
    this.choice5 = [];
  }
}
