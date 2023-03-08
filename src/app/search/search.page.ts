import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Article} from "../models/article";
import {ArticleService} from "../services/article/article.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  textSearch: string;
  resultatArticle: Article[] = [];

  constructor(private route: ActivatedRoute, private articleService: ArticleService) { }

  ngOnInit() {
    if(this.route.snapshot.queryParams.txt) {
      this.textSearch = this.route.snapshot.queryParams.txt;

      this.articleService.getArticleWitchTag(this.textSearch).then(
        (data) => {
          this.resultatArticle = data;
        }
      );
    }
  }

}
