import { Component, OnInit, inject, signal, effect } from '@angular/core';
import { CartService } from '../../../services/cart.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  cardQuantity = signal(0);
  private cartService = inject(CartService);

  constructor() {
    effect(
      () => {
        this.cartService.getCartObservable().subscribe((newCart) => {
          this.cardQuantity.set(newCart.totalCount);
        });
      },
      { allowSignalWrites: true }
    );
  }

  ngOnInit(): void {}
}
