import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-slider1',
  standalone: true,
  imports: [AppComponent, CommonModule],
  templateUrl: './slider1.component.html',
  styleUrl: './slider1.component.css'
})
export class Slider1Component {
  currentSlide = 0;

  changeSlide(direction: number): void {
    const items = document.querySelectorAll('.carousel-item');
    this.currentSlide = (this.currentSlide + direction + items.length) % items.length;
    const carouselInner = document.querySelector('.carousel-inner') as HTMLElement;
    carouselInner.style.transform = `translateX(-${this.currentSlide * 100}%)`;
  }
}
