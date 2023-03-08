/* eslint-disable @typescript-eslint/naming-convention */
export class Article {
  date: string;
  id: string;

  constructor(public title: string, public content: string, public status: number,
     public description: string,
     public logo: string,
     public miniature: string, public categorie: string, public tags: string[], public link: string,
     public created_by: string) {
    this.date = new Date().toString();
  }
}
