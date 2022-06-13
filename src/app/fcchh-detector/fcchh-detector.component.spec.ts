import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FcchhDetectorComponent } from './fcchh-detector.component';

describe('FcchhDetectorComponent', () => {
  let component: FcchhDetectorComponent;
  let fixture: ComponentFixture<FcchhDetectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FcchhDetectorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FcchhDetectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
