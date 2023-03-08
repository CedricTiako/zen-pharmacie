import {Component, OnInit, Pipe, PipeTransform} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {ArticleService} from '../services/article/article.service';
import {ActivatedRoute} from '@angular/router';
import {Article} from '../models/article';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-preview-article',
  templateUrl: './preview-article.page.html',
  styleUrls: ['./preview-article.page.scss'],
})

export class PreviewArticlePage implements OnInit {

  currentArticle: Article;
  linkj: any;

  constructor(private http: HttpClient,
     private articleService: ArticleService, private activatedRoute: ActivatedRoute, private sanitizer: DomSanitizer) { }

  ngOnInit() {
    this.articleService.getArticleWitchId(this.activatedRoute.snapshot.paramMap.get('id')).then(
      (data) => {
        this.currentArticle = data;

        this.linkj =  this.currentArticle.content.includes('http://') ||
        this.currentArticle.content.includes('https://') ?
         this.sanitizer.bypassSecurityTrustResourceUrl(data.content) : null;

      }
    );
  }
}
