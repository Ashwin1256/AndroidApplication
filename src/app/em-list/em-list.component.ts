import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-em-list',
  templateUrl: './em-list.component.html',
  styleUrls: ['./em-list.component.css']
})
export class EmListComponent implements OnInit {

  departments = [
    { "id": 1 ,"name" :  "Angular"} ,
    { "id": 2 ,"name" : "React"},
    { "id": 3 ,"name" : "Data Science"},
    { "id": 4 ,"name" : "Machine Learning"}
  ]

  constructor(private router: Router) { }

  onSelect(department:any){

    this.router.navigate(['dpdetail' ,department.id]);

  }

  ngOnInit(): void {
  }

}
