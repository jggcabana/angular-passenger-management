import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadCardComponent } from './load-card.component';

describe('LoadCardComponent', () => {
  let component: LoadCardComponent;
  let fixture: ComponentFixture<LoadCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoadCardComponent]
    });
    fixture = TestBed.createComponent(LoadCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
