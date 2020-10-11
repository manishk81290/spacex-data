import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterActionComponent } from './filter-action.component';

describe('FilterActionComponent', () => {
  let component: FilterActionComponent;
  let fixture: ComponentFixture<FilterActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
