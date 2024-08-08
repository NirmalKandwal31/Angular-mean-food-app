import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../shared/models/Food';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';
import { SearchComponentComponent } from '../../shared/search-component/search-component.component';
import { TagsComponentComponent } from '../../shared/tags-component/tags-component.component';
import { PageNotFoundComponent } from '../../shared/page-not-found/page-not-found.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    RatingModule,
    SearchComponentComponent,
    TagsComponentComponent,
    PageNotFoundComponent,
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'], // Corrected styleUrls
})
export class HomeComponent {
  foods: Food[] = [];

  constructor(
    private foodService: FoodService,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) {
        this.foods = this.foodService.getAllFoodBySearchTerm(params.searchTerm);
      } else if (params.tag) {
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      } else {
        this.foods = this.foodService.getAllFood();
      }
    });
  }
}
