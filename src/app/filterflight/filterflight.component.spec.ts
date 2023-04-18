import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterflightComponent } from './filterflight.component';

describe('FilterflightComponent', () => {
  let component: FilterflightComponent;
  let fixture: ComponentFixture<FilterflightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterflightComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterflightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
