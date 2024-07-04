import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurentService } from 'src/Services/restaurent.service';

@Component({
  selector: 'app-edit-restaurent',
  templateUrl: './edit-restaurent.component.html',
  styleUrls: ['./edit-restaurent.component.css'],
})
export class EditRestaurentComponent implements OnInit {
  restaurantForm!: FormGroup;
  currentRestaurent!: any;
  test="testId";
  ID!: number;
  constructor(
    private formBuilder: FormBuilder,
    private activeroute: ActivatedRoute,
    private router: Router,
    private restaurentService: RestaurentService
  ) {}

  ngOnInit(): void {
    this.activeroute.params.subscribe((params) => {
      this.ID = params['id'];
      console.log(`Id Retrived in EditRestaurent :: ${this.ID}`);
      this.restaurentService.getRestaurantById(this.ID).subscribe((data) => {
        this.currentRestaurent = data;
        console.log(
          `Current Restaunt :: ${JSON.stringify(this.currentRestaurent)}`
        );
        console.log(`Edit Restaurent :: ${JSON.stringify(data)}`);
        console.log(`ID to display :: ${this.currentRestaurent.id}`);
        this.createForm();
      });
    });
  }

  createForm() {
    this.restaurantForm = new FormGroup({
      restaurantId: new FormControl(this.currentRestaurent.id,[Validators.required]),
      restaurantName: new FormControl(this.currentRestaurent.name, [
        Validators.required,
      ]),
      restaurantType: new FormControl(this.currentRestaurent.type, [
        Validators.required,
      ]),
      description: new FormControl([this.currentRestaurent.description]),
      address: new FormControl([this.currentRestaurent.address]),
      imageUrl: new FormControl([this.currentRestaurent.imageUrl]),
      phone: new FormControl([this.currentRestaurent.phone]),
    });
  }

  onUpdate() {
    console.log(
      `updated Form Value :: ${JSON.stringify(this.restaurantForm.value)}`
    );
    const updatedRestaured = {
      id: this.restaurantForm.value.restaurantId,
      name: this.restaurantForm.value.restaurantName,
      type: this.restaurantForm.value.restaurantType,
      description: this.restaurantForm.value.description,
      address: this.restaurantForm.value.address,
      imageUrl: this.restaurantForm.value.imageUrl,
      phone: this.restaurantForm.value.phone,
    };

    this.restaurentService.updateRestaurant(updatedRestaured).subscribe(() => {
      console.log(`Restaurent Details are updated :: ${updatedRestaured}`);
    });
    this.router.navigate(['/']);
  }
}
