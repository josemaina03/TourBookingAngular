import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursLocationComponent } from './tours.component';

describe('ToursLocationComponent', () => {
  let component: ToursLocationComponent;
  let fixture: ComponentFixture<ToursLocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursLocationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToursLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
