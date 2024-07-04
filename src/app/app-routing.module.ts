import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { EditRestaurentComponent } from './edit-restaurent/edit-restaurent.component';

const routes: Routes = [
  { path: '', component: RestaurentListComponent },

  {
    path: 'AddRestaurent',
    component: AddRestaurentComponent,
  },
  {
    path: 'RestaurentDetails/:id',
    component: RestaurentDetailsComponent,
  },
  {
    path:'editRestaurent/:id',
    component:EditRestaurentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
