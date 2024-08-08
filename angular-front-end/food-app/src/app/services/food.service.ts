import { Injectable } from '@angular/core';
import { Food } from '../components/shared/models/Food';
import { FOODS, sample_tags } from '../components/shared/models/data';
import { Tag } from '../components/shared/models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}

  getAllFood(): Food[] {
    return FOODS;
  }

  getAllFoodBySearchTerm(searchTerm: string): Food[] {
    return this.getAllFood().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  getAllTags(): Tag[] {
    return sample_tags;
  }

  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAllFood()
      : this.getAllFood().filter((food) => food.tags?.includes(tag));
  }

  getFoodByID(foodId: string): Food {
    return this.getAllFood().find((food) => food.id === foodId) ?? new Food();
  }
}
