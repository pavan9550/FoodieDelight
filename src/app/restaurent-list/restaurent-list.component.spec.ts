import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurentListComponent } from './restaurent-list.component';

describe('RestaurentListComponent', () => {
  let component: RestaurentListComponent;
  let fixture: ComponentFixture<RestaurentListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RestaurentListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RestaurentListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
