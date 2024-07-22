import { Injectable } from '@angular/core';
import { Food } from '../components/shared/models/Food';
import { FOODS } from '../components/shared/models/data';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFood(): Food[] {
    return FOODS;
  }
}
