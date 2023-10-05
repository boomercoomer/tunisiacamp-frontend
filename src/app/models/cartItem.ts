import { Article } from "./Article";

export class CartItem {
  constructor(article: Article) {
    this.article = article;
  }
  article: Article;
  quantity: number = 1;

  get price(): number {
    return this.article.price * this.quantity;
  }
}