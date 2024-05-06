import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-presentation',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './presentation.component.html',
  styleUrl: './presentation.component.css'
})
export class PresentationComponent {
  lines: number[] = Array.from({ length: 6 }, (_, index) => index + 1);
}
