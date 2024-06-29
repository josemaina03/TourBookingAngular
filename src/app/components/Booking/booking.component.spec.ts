import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsComponent } from './booking.component';

describe('BookingComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [DetailsComponent]
    });
    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
