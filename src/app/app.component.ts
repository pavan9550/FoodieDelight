import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestaurentService } from 'src/Services/restaurent.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // private apiUrl = 'http://localhost:3000/restaurants';
  // constructor(private http : HttpClient){}
  // ngOnInit(): void {
  //   this.http.get(this.apiUrl).subscribe(data=>{
  //     console.log(`${JSON.stringify(data)}`);
  //   })
  // }
  // title = 'FoodieDelight';

  restaurants!: any[];

  constructor(private restaurantService: RestaurentService) { }

  ngOnInit(): void {
    this.restaurantService.getRestaurants()
      .subscribe(restaurants => {
        this.restaurants = restaurants;
      });
  }
}
