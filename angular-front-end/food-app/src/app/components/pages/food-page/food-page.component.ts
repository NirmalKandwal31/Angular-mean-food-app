import { Component, OnInit, inject, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../shared/models/Food';
import { RatingModule } from 'ngx-bootstrap/rating';
import { CommonModule } from '@angular/common';
import { CartService } from '../../../services/cart.service';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-food-page',
  standalone: true,
  imports: [RatingModule, CommonModule, RouterModule, PageNotFoundComponent],
  templateUrl: './food-page.component.html',
  styleUrls: ['./food-page.component.scss'],
})
export class FoodPageComponent implements OnInit {
  food = signal<Food | null>(null);
  private activatedRoute = inject(ActivatedRoute);
  private foodService = inject(FoodService);
  private cartService = inject(CartService);
  private router = inject(Router);

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      if (params['id']) {
        this.food.set(this.foodService.getFoodByID(params['id']));
      }
    });
  }

  addToCart() {
    if (this.food()) {
      this.cartService.addToCart(this.food()!);
      this.router.navigateByUrl('/cart-page');
    }
  }
}
