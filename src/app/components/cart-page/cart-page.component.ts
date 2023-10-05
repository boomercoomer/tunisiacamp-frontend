import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Cart } from '../../models/cart';
import { CartService } from '../../services/cart.service';
import { CartItem } from '../../models/cartItem';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  //An item price is an article's quantity times its unitary price
  cart!: Cart;
  quantity: number = 1;
  constructor(private cartService: CartService) {
    this.setCart();
  }
  ngOnInit(): void {
  }

  removeFromCart(cartItem: CartItem) {

    this.cartService.removeFromCart(cartItem.article.id!);
    this.setCart();
  }

  changeQuantity(cartItem: CartItem) {

    this.cartService.changeQuantity(cartItem.article.id!, this.quantity);
    this.setCart();
  }

  setCart() {
    this.cart = this.cartService.getCart();
  }

}
