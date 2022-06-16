import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Subject } from 'rxjs';
import { FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user:User= new User();
  submitted=false;
  form:FormGroup=new FormGroup({});

  constructor(private userService:UserService, private router:Router, private fb:FormBuilder) { 
   this.validateForm(); 
  }

  validateForm()
  {
    this.form=this.fb.group({
      user_name: ['', [Validators.required,Validators.pattern("^[a-z A-Z]+$")]],
      user_email: ['', [Validators.required,Validators.email]],
      user_phone: ['', [Validators.required, Validators.pattern("^[1-9]{1}[0-9]{9}$"),,Validators.maxLength(10)]],
      user_age: ['',[Validators.required,Validators.pattern("^(?:[1-9]|[1-9][0-9]|100)$")]],
      user_status:['',Validators.required]
    })
  }

  get f()
  {
    return this.form.controls;
  }

  ngOnInit(): void {
  }
  onSubmit()
  {
    this.submitted=true;
    this.userService.createUser(this.user).subscribe(
      data=>console.log(data),error=>console.log(error));
    this.user= new User();
    this.router.navigate(['/users']);
    console.log(this.user);
    alert("Employee Added Succesfully");
  }
    

}
