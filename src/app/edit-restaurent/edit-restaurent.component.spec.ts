import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRestaurentComponent } from './edit-restaurent.component';

describe('EditRestaurentComponent', () => {
  let component: EditRestaurentComponent;
  let fixture: ComponentFixture<EditRestaurentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditRestaurentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditRestaurentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
