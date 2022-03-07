import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-department-details',
  templateUrl: './department-details.component.html',
  styleUrls: ['./department-details.component.css']
})
export class DepartmentDetailsComponent implements OnInit {

  constructor(private aroute:ActivatedRoute) { }

public departmentid: any;

  ngOnInit(): void {
    
    let id = this.aroute.snapshot.paramMap.get('id');
    this.departmentid = id;

  }

}
