import { Component, Input, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss',
})
export class PageNotFoundComponent {
  @Input() isVisible = false;
  @Input() pageNotFoundMessage = 'Nothing is found';
  @Input() resetLinkText = 'Reset';
  @Input() resetLinkRoute = '/';
}
