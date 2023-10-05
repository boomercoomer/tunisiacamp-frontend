import { Component, OnInit } from '@angular/core';
import { Article } from '../../models/Article';
import { ArticleService } from '../../services/article.service';
import { CartService } from '../../services/cart.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminpanelService } from '../../services/adminpanel.service';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {
  currentid: number = 0;
  article!: Article;
  constructor(private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
    private cartService: CartService,
    private router: Router) {

  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params) => {
      if (params.id) {
        this.currentid = params.id;
      }

    })
    this.articleService.getArticleById(this.currentid).subscribe((res) => { this.article = { ...res } })
  }

  addToCart() {
    this.cartService.addToCart(this.article);
    this.router.navigateByUrl('/cart-page');
  }


}
