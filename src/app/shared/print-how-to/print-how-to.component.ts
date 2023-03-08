import { Component, OnInit } from '@angular/core';
import {Article} from "../../models/article";
import {ArticleService} from "../../services/article/article.service";

@Component({
  selector: 'app-print-how-to',
  templateUrl: './print-how-to.component.html',
  styleUrls: ['./print-how-to.component.scss'],
})
export class PrintHowToComponent implements OnInit {

  slideOpts = {
    initialSlide: 0,
    speed: 800 ,
    slidesPerView: 1.24,
    spaceBetween: 3,
    slidesOffsetBefore:10,
    slidesOffsetAfter:10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pager: true,
    scrollbar: true,
    //autoplay:true
  };

  allHowTo: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles('how-to').then(
      (data) => {
        this.allHowTo = data;
      }
    );
  }

}
