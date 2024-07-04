import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddRestaurentComponent } from './add-restaurent/add-restaurent.component';
import { EditRestaurentComponent } from './edit-restaurent/edit-restaurent.component';
import { RestaurentListComponent } from './restaurent-list/restaurent-list.component';
import { RestaurentDetailsComponent } from './restaurent-details/restaurent-details.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRestaurentComponent,
    EditRestaurentComponent,
    RestaurentListComponent,
    RestaurentDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
