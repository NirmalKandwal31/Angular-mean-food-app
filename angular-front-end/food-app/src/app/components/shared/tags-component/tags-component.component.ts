import { Component, inject, signal } from '@angular/core';
import { Tag } from '../models/Tag';
import { FoodService } from '../../../services/food.service';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tags-component',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './tags-component.component.html',
  styleUrl: './tags-component.component.scss',
})
export class TagsComponentComponent {
  tags = signal<Tag[]>([]);
  private foodService = inject(FoodService);

  ngOnInit(): void {
    this.tags.set(this.foodService.getAllTags());
  }
}
