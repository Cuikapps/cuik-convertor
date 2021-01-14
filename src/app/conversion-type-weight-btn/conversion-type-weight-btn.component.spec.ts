import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionTypeWeightBtnComponent } from './conversion-type-weight-btn.component';

describe('ConversionTypeWeightBtnComponent', () => {
  let component: ConversionTypeWeightBtnComponent;
  let fixture: ComponentFixture<ConversionTypeWeightBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionTypeWeightBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionTypeWeightBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
