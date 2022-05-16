import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import { Subject } from 'rxjs';
@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  user:User= new User();
  submitted=false;
  dtTrigger: Subject<any> = new Subject();

  constructor(private userService:UserService, private router:Router) { }

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
    this.dtTrigger.next();
  }
    

}
