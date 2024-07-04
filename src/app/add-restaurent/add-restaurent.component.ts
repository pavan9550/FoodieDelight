import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { RestaurentService } from 'src/Services/restaurent.service';

@Component({
  selector: 'app-add-restaurent',
  templateUrl: './add-restaurent.component.html',
  styleUrls: ['./add-restaurent.component.css'],
})
export class AddRestaurentComponent {
  restaurantForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private restaurentService: RestaurentService
  ) {}

  ngOnInit(): void {
    this.restaurantForm = this.formBuilder.group({
      restaurantId: ['', Validators.required],
      restaurantName: ['', Validators.required],
      restaurantType: ['', Validators.required],
      description: [''],
      address: [''],
      imageUrl: [''],
      phone: [''],
    });
  }

  onSubmit() {
    console.log(this.restaurantForm.value);
    const res = {
      id: this.restaurantForm.value.restaurantId,
      name: this.restaurantForm.value.restaurantName,
      type: this.restaurantForm.value.restaurantType,
      description: this.restaurantForm.value.description,
      address: this.restaurantForm.value.address,
      imageUrl: this.restaurantForm.value.imageUrl,
      phone: this.restaurantForm.value.phone,
    };
    this.restaurentService.addRestaurant(res).subscribe((data) => {
      console.log(`updatedList :: ${JSON.stringify(data)}`);
    });
    this.restaurantForm.reset();
    this.router.navigate(['/']);
  }
}
