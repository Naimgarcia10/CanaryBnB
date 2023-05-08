import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelfilterComponent } from './hotelfilter.component';

describe('HotelfilterComponent', () => {
  let component: HotelfilterComponent;
  let fixture: ComponentFixture<HotelfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotelfilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HotelfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
