import { Injectable } from '@angular/core';
import { Cart } from '../models/cart';
import { CartItem } from '../models/cartItem';
import { Article } from '../models/Article';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Cart = new Cart();

  addToCart(article: Article): void {
    let cartItem = this.cart.items.find(item => item.article.id === article.id);
    if (cartItem) {
      this.changeQuantity(article.id!, cartItem.quantity + 1);
      return;
    }
    this.cart.items.push(new CartItem(article));
  }

  removeFromCart(articleId: number): void {
    this.cart.items =
      this.cart.items.filter(item => item.article.id != articleId);
  }

  changeQuantity(articleId: number, quantity: number) {
    let cartItem = this.cart.items.find(item => item.article.id === articleId);
    if (!cartItem) return;
    cartItem.quantity = quantity;
  }

  getCart(): Cart {
    return this.cart;
  }
}
