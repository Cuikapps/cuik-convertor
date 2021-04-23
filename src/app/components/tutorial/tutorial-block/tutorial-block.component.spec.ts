import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorialBlockComponent } from './tutorial-block.component';

describe('TutorialBlockComponent', () => {
  let component: TutorialBlockComponent;
  let fixture: ComponentFixture<TutorialBlockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutorialBlockComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TutorialBlockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
