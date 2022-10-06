import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllBookngsComponent } from './all-bookngs.component';

describe('AllBookngsComponent', () => {
  let component: AllBookngsComponent;
  let fixture: ComponentFixture<AllBookngsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllBookngsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllBookngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
