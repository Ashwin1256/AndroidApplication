import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, routingcomponents} from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartmentDetailsComponent } from './department-details/department-details.component';



@NgModule({
  declarations: [

     AppComponent, 
     routingcomponents, DepartmentDetailsComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
