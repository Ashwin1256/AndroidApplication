import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentDetailsComponent } from './department-details/department-details.component';
import { EmDetailComponent } from './em-detail/em-detail.component';
import { EmListComponent } from './em-list/em-list.component';


const routes: Routes = [

  {path: '' , redirectTo:'/emlist', pathMatch: 'full'},
  {path:'dpdetail/:id' ,component:DepartmentDetailsComponent},
  {path:'emlist' , component:EmListComponent},
  {path:'emdetail' , component:EmDetailComponent}
];  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingcomponents = [EmListComponent,EmDetailComponent,DepartmentDetailsComponent]

