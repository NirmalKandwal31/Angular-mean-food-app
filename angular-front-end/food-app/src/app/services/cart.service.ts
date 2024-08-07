import { Injectable } from '@angular/core';
import { Food } from '../components/shared/models/Food';
import { Cart } from '../components/shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartItem } from '../components/shared/models/CartItems';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cart: Cart = this.getCartFromLocalStorage();
  private cartSubject: BehaviorSubject<Cart> = new BehaviorSubject(this.cart);

  constructor() {}

  addToCart(food: Food): void {
    let cartItem = this.cart.items.find((item) => item.food.id === food.id);
    if (cartItem) return;

    this.cart.items.push(new CartItem(food));
    this.setCartToLocalStorage();
  }

  removeCart(foodId: string): void {
    this.cart.items = this.cart.items.filter((item) => item.food.id != foodId);
    this.setCartToLocalStorage();
  }

  changeQuantity(foodId: string, quantity: number) {
    let cartItem = this.cart.items.find((item) => item.food.id === foodId);

    if (!cartItem) return;
    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.food.price;
    this.setCartToLocalStorage();
  }

  clearCart() {
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable(): Observable<Cart> {
    return this.cartSubject.asObservable();
  }

  private setCartToLocalStorage(): void {
    if (this.isLocalStorageAvailable()) {
      this.cart.totalPrice = this.cart.items.reduce(
        (prevSum, currentItem) => prevSum + currentItem.price,
        0
      );
      this.cart.totalCount = this.cart.items.reduce(
        (prevSum, currentItem) => prevSum + currentItem.quantity,
        0
      );
      const cartJson = JSON.stringify(this.cart);
      localStorage.setItem('Cart', cartJson);
      this.cartSubject.next(this.cart);
    }
  }

  private getCartFromLocalStorage(): Cart {
    if (this.isLocalStorageAvailable()) {
      const cartJson = localStorage.getItem('Cart');
      return cartJson ? JSON.parse(cartJson) : new Cart();
    }
    return new Cart();
  }

  private isLocalStorageAvailable(): boolean {
    try {
      const test = 'test';
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch (e) {
      return false;
    }
  }
}
