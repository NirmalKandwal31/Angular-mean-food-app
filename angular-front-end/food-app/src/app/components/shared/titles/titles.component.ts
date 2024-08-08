import { Component, Input, Signal, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-titles',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './titles.component.html',
  styleUrls: ['./titles.component.scss'],
})
export class TitlesComponent {
  private _title = signal('');
  private _margin = signal('1rem 0 1rem 0.2rem');
  private _fontSize = signal('1.7rem');

  @Input()
  set title(value: string) {
    this._title.set(value);
  }
  get title(): string {
    return this._title();
  }

  @Input()
  set margin(value: string) {
    this._margin.set(value);
  }
  get margin(): string {
    return this._margin();
  }

  @Input()
  set fontSize(value: string) {
    this._fontSize.set(value);
  }
  get fontSize(): string {
    return this._fontSize();
  }
}
