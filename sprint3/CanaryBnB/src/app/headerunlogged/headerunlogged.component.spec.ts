import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderunloggedComponent } from './headerunlogged.component';

describe('HeaderunloggedComponent', () => {
  let component: HeaderunloggedComponent;
  let fixture: ComponentFixture<HeaderunloggedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderunloggedComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderunloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
