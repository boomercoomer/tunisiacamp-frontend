import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/Article';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit, OnChanges {
  displayMode!: string;
  displayMode2!: string;
  articles: Article[] = [];

  constructor(private articleService: ArticleService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((value) => { this.displayMode = value.category; this.displayMode2 = value.searchTerm; })
    if (this.displayMode2) { this.articles = this.articleService.getArticleByName(this.displayMode2) }
    else if (this.displayMode) { this.articles = this.articleService.getByCategoryAll(this.displayMode); }
    else { this.articles = this.articleService.getAll(); }

  }
  ngOnChanges(changes: SimpleChanges): void {
    this.ngOnInit();

  }

}
