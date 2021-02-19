import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConversionTypeBtnComponent } from './conversion-type-btn.component';

describe('ConversionTypeBtnComponent', () => {
  let component: ConversionTypeBtnComponent;
  let fixture: ComponentFixture<ConversionTypeBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConversionTypeBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConversionTypeBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
