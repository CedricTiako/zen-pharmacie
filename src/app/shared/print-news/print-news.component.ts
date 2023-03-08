import { Component, OnInit } from '@angular/core';
import {Article} from '../../models/article';
import {ArticleService} from '../../services/article/article.service';

@Component({
  selector: 'app-print-news',
  templateUrl: './print-news.component.html',
  styleUrls: ['./print-news.component.scss'],
})
export class PrintNewsComponent implements OnInit {

  slideOptsNews = {
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
    autoplay:true
  };

  allNews: Article[] = [];

  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.articleService.getArticles('news').then(
      (data) => {
        this.allNews = data;
      }
    );
  }

}
