import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurentService } from 'src/Services/restaurent.service';
@Component({
  selector: 'app-restaurent-details',
  templateUrl: './restaurent-details.component.html',
  styleUrls: ['./restaurent-details.component.css'],
})
export class RestaurentDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router : Router,
    private restaurentService: RestaurentService
  ) {}
  currentRestaurent!: any;
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      let id = params['id'];
      console.log(`Id is :: ${id}`);
      this.restaurentService
        .getRestaurantById(id)
        .subscribe((currentRestaurent) => {
          this.currentRestaurent = currentRestaurent;
          console.log(`Current Res :: ${JSON.stringify(currentRestaurent)}`);
        });
    });
  }

  DeleteRestaurent() {
    this.restaurentService.deleteRestaurant(this.currentRestaurent.id);
  }

  editRestaurent(){
    console.log(`EditRestaurent Clicked  ${this.currentRestaurent.id}`);
    this.router.navigate(['/editRestaurent',this.currentRestaurent.id]);
  }

  editDetails(){
    console.log(`clicked on Edit Details`);
    this.router.navigate(['/editRestaurent', this.currentRestaurent.id]);
  }
  backToList(){
    this.router.navigate(['/']);
  }
  delete(){
    const del = confirm("Are You Sure!!! Want to Delete this restaurent???");
    if(del){
      this.restaurentService.deleteRestaurant(this.currentRestaurent.id).subscribe(data=>{
        console.log("REstaurent Deleted!!!");
        this.router.navigate(['/']);
      });
    }
    else{
      this.router.navigate(['/']);
    }
  }
}
