import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeImageSliderComponent } from './home-image-slider.component';

describe('HomeImageSliderComponent', () => {
  let component: HomeImageSliderComponent;
  let fixture: ComponentFixture<HomeImageSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeImageSliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeImageSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
