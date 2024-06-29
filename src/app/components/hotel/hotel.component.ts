import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelLocation } from '../../Model/hotel-location';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-housing-location',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
      <section class="listing">
          <img class="listing-photo" [src]="hotelLocation.photo" alt="Exterior photo of {{hotelLocation.name}}">
          <h2 class="listing-heading">{{ hotelLocation.name}}</h2>
          <p class="listing-location">{{ hotelLocation.location}} </p>
          <p class="listing-starrating">
            <i *ngFor="let star of getStars(hotelLocation.starrating)" class="fas fa-star"></i>
            <i *ngFor="let star of getEmptyStars(hotelLocation.starrating)" class="far fa-star"></i>
          </p>
          <a [routerLink]="['/details', hotelLocation.id]">Book now</a>
      </section>
  `,
  styleUrls: ['./hotel.component.css']
})
export class HotelLocationComponent {
  @Input() hotelLocation!:HotelLocation ;


  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }

  getEmptyStars(rating: number): number[] {
    return Array(5 - rating).fill(0);
  }

}
