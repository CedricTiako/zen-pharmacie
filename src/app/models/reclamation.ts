import {ToolsService} from '../services/tools/tools.service';

export class Reclamation {
  date: string;
  id: string;

  constructor(public preocupation: string, public auteur: string, public precision: string) {
    const gid = new ToolsService();
    this.id = gid.generateId(23);
    this.date = new Date().toString();
  }
}
