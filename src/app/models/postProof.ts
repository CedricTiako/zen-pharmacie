import {ToolsService} from '../services/tools/tools.service';

export class PostProof {
  date: string;
  id: string;
  etat: number;

  constructor(public media: string, public auteur: string, public idCampagne: string, public idStore: string, public language: string) {
    const gid = new ToolsService();
    this.id = gid.generateId(23);
    this.date = new Date().toString();
    this.etat = 0;
  }
}
