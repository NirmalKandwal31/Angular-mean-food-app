import { Component } from '@angular/core';
import { FoodService } from '../../../services/food.service';
import { Food } from '../../shared/models/Food';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'ngx-bootstrap/rating';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, RatingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService) {
    this.foods = foodService.getAllFood();
  }
}
