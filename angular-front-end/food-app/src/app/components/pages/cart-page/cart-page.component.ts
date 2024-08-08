import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { Cart } from '../../shared/models/Cart';
import { CartService } from '../../../services/cart.service';
import { CartItem } from '../../shared/models/CartItems';
import { TitlesComponent } from '../../shared/titles/titles.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-cart-page',
  standalone: true,
  imports: [TitlesComponent, CommonModule, RouterModule, PageNotFoundComponent],
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.scss'],
})
export class CartPageComponent implements OnInit {
  cart = signal<Cart | null>(null);
  private cartService = inject(CartService);

  constructor() {
    effect(
      () => {
        this.cartService.getCartObservable().subscribe((cart) => {
          this.cart.set(cart);
        });
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {}

  removeFromCart(cartItem: CartItem) {
    this.cartService.removeCart(cartItem.food.id);
  }

  changeQuantity(cartItem: CartItem, quantityInString: string) {
    const quantity = parseInt(quantityInString, 10);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
  }
}
