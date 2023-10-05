import { Component, OnInit } from '@angular/core';
import { categories } from '../../models/consts';
import { AdminpanelService } from '../../services/adminpanel.service';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common'

@Component({
  selector: 'app-admin-item-panel',
  templateUrl: './admin-item-panel.component.html',
  styleUrls: ['./admin-item-panel.component.css']
})
export class AdminItemPanelComponent implements OnInit {
  deletebuttonstyle: string = "none";
  name: string = "";
  categori: string = categories[0];
  imageURL: string = "";
  price: number = 0;
  short_description: string = "";
  description: string = "";
  stars: number = 0;

  currentid!: number;
  article = {
    name: this.name,
    category: this.categori,
    imageURL: this.imageURL,
    price: this.price,
    short_description: this.short_description,
    description: this.description,
    stars: this.stars
  };
  articlouet!: Article;

  constructor(private adminPanelService: AdminpanelService,
    private articleService: ArticleService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }
  categories = categories;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.currentid = params.id;
        this.articleService.getArticleById(params.id).subscribe((res) => { this.articlouet = { ...res }; this.updateArticle(this.articlouet) });
        this.deletebuttonstyle = "block";
      }
    })


  }

  deleteArticle() {
    this.adminPanelService.deleteArticle(this.currentid);
    this.back();
  }
  addArticle() {
    if (this.currentid) { this.deleteArticle(); }

    this.adminPanelService.addArticle(this.reverseUpdateArticle());
    this.back();
  }
  updateArticle(article: Article) {
    this.name = article.name;
    this.categori = article.category ? article.category : "Bags";
    this.imageURL = article.imageURL;
    this.price = article.price;
    this.short_description = article.short_description ? article.short_description : article.description;
    this.description = article.description;
    this.stars = 0;
  }
  reverseUpdateArticle(): Article {
    const article: Article = {

      name: this.name,
      category: this.categori,
      imageURL: this.imageURL,
      price: this.price,
      short_description: this.short_description,
      description: this.description,
      stars: this.stars
    }
    return article;

  };

  back(): void {
    this.location.back();
  }

}
