import {Component, Input, OnInit} from '@angular/core';
import {FaqService} from "../../services/faq/faq.service";
import {Faq} from "../../models/faq";

@Component({
  selector: 'app-miniature-faq',
  templateUrl: './miniature-faq.component.html',
  styleUrls: ['./miniature-faq.component.scss'],
})
export class MiniatureFaqComponent implements OnInit {

	@Input() idFaq: string;
  @Input() data: Faq;

  constructor(private faqService: FaqService) { }

  ngOnInit() {
    if(!this.data && this.idFaq) {
      this.faqService.getFaqWitchId(this.idFaq).then(
        (donnee) => {
          this.data = donnee;
        }
      );
    }
  }

  getValueTraduct(texte: string) {
    let result; let result2;
    //const result1 = texte.split((this.translate.currentLang ? this.translate.currentLang : 'en') + '>');
    //if(result1.length > 1) { result2 = result1[1].split('</'); }
    //if(result1.length > 1 && result2.length > 0) { result = result2[0]; }
    return result ? result : texte;
  }

}
