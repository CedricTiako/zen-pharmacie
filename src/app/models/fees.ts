export class Fees {
  date: string;

  constructor(public id: string, public idOperator: string, public name: string, public status: number, public min: number[], public max: number[], public seuilMin: number, public seuilMax: number, public typeCalcul: string[], public  montant: number[], public  idCountrySend: string, public idCountryDes: string[], public titleTax: string, public montantTax: number, public typeCalculTax: string, public idGroupFees: string, public content: string, public devise: string, public dateUpdate: string, public created_by: string) {
    this.date = new Date().toString();
  }
}
