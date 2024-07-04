import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RestaurentService } from 'src/Services/restaurent.service';

@Component({
  selector: 'app-restaurent-list',
  templateUrl: './restaurent-list.component.html',
  styleUrls: ['./restaurent-list.component.css']
})
export class RestaurentListComponent implements OnInit {

  restaurentList:any[]=[];
  constructor(private restaurentService : RestaurentService,private router:Router){}
  ngOnInit(){
    this.restaurentService.getRestaurants().subscribe(data=>{
      this.restaurentList = data;
      console.log(`Restaurent List :: ${JSON.stringify(this.restaurentList)}`);
    })
  }

  detailedPage(data:any){
    console.log("Div Click Worked");
    console.log(`${JSON.stringify(data)}`);
    this.router.navigate(['RestaurentDetails', data.id]);

  }
  
}
