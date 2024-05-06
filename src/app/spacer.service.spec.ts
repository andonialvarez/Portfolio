import { Component } from '@angular/core';
import { SpacerService } from './spacer.service'; // Adjust the path as needed

@Component({
  selector: 'app-spacer',
  template: `
    <div [innerHTML]="spacer"></div>
  `,
  styleUrls: ['./spacer.component.css'] // Adjust if needed
})
export class SpacerComponent {
  spacer: string;

  constructor(private spacerService: SpacerService) {
    this.spacer = this.spacerService.generateSpacer(50);
  }
}
