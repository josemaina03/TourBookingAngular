import { Component } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
@Component({
  standalone: true,
  selector: 'app-root',
  template: `<main>
                <header class="brand-name">
                  <img class="" src="/assets/logo.svg"
                  alt="logo" aria-hidden="true">
                </header>
                <section class="content">
                  <router-outlet></router-outlet>
                </section>
              </main>
            `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent, RouterModule, HeaderComponent]
})
export class AppComponent {
  title = 'TourBooking';
  
}
