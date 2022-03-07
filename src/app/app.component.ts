import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup,FormBuilder , Validators} from '@angular/forms';
import { passwordValidator } from './shared/password.validator';
import { forbiddenNameValidator } from './shared/user-name.validator';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',  
  styleUrls: ['./app.component.css']
})
export class AppComponent  {

  title= "This is new Angular Application using Reactive form"
 
  constructor(private fb :FormBuilder) { }
  

registrationForm = this.fb.group({

  userName: ['', [Validators.required, Validators.minLength(4),forbiddenNameValidator]],
  email: [''],
  password: [''],
  gender:[''],
  confirmPassword: ['']

}, {validator: passwordValidator});


  callApi(){
    this.registrationForm.patchValue({
  
      userName: 'lund' ,
      email: 'lund@laurdwa.com',
      password: '1234',
      gender:'male',
      confirmPassword: '1234'
  
    })
  
    
    } 


}

