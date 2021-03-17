import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LengthTypeScrollbarComponent } from './length-type-scrollbar.component';

describe('LengthTypeScrollbarComponent', () => {
  let component: LengthTypeScrollbarComponent;
  let fixture: ComponentFixture<LengthTypeScrollbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LengthTypeScrollbarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LengthTypeScrollbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
