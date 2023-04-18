import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifichotelComponent } from './specifichotel.component';

describe('SpecifichotelComponent', () => {
  let component: SpecifichotelComponent;
  let fixture: ComponentFixture<SpecifichotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecifichotelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecifichotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
