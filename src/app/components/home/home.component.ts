import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelLocationComponent } from '../hotel/hotel.component';
import { ToursLocationComponent } from '../tours/tours.component';
import { HotelLocation } from '../../Model/hotel-location';
import { ToursLocation } from '../../Model/tours-location';
import { toursService } from 'src/app/services/tours.service';
import { hotelsService } from 'src/app/services/hotel.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HotelLocationComponent, ToursLocationComponent],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by location or destination" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <br><br><br><br>
    <!-- <h1>Hotels Available</h1>
    <section class="results">
      <app-housing-location *ngFor="let hotelLocation of filteredLocationList" [hotelLocation]="hotelLocation"></app-housing-location>
    </section> -->
    <div class="hotel-section">
      <h1 class="hotel-title">Hotels Available</h1>
      <section class="results">
      <app-housing-location *ngFor="let hotelLocation of filteredLocationList" [hotelLocation]="hotelLocation"></app-housing-location>
      </section>
      <br><br><br><br>
    <div class="tours-section">
      <h1 class="tours-title">Tours Available</h1>
      <section class="results">
        <app-tours-location *ngFor="let toursLocation of filteredLocation" [toursLocation]="toursLocation"></app-tours-location>
      </section>
    </div>
  `,
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  hotelLocationList: HotelLocation[] = [];
  toursLocationList: ToursLocation[] = [];
  filteredLocationList: HotelLocation[] = [];
  filteredLocation: ToursLocation[] = [];

  hotelsService = inject(hotelsService);
  toursService = inject(toursService);

  constructor() {
    this.hotelsService.getAllHotelLocations().then((hotelLocationList: HotelLocation[]) => {
      this.hotelLocationList = hotelLocationList;
      this.filteredLocationList = hotelLocationList;
    });

    this.toursService.getAlltoursLocations().then((toursLocationList: ToursLocation[]) => {
      this.toursLocationList = toursLocationList;
      this.filteredLocation = toursLocationList;
    });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.hotelLocationList;
      this.filteredLocation = this.toursLocationList;
    } else {
      this.filteredLocationList = this.hotelLocationList.filter(
        hotelLocation => hotelLocation?.location.toLowerCase().includes(text.toLowerCase())
        // toursLocation => toursLocation?.location.toLowerCase().includes(text.toLocaleLowerCase())
      );

      this.filteredLocation = this.toursLocationList.filter(
        toursLocation => toursLocation?.destination.toLowerCase().includes(text.toLowerCase())
      );
    }
    
  }
}