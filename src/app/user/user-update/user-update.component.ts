import { Component, OnInit } from '@angular/core';
import { ApiResponse } from 'src/app/model/api.response';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { User } from 'src/app/model/user.model';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-user-update',
  templateUrl: './user-update.component.html',
  styleUrls: ['./user-update.component.css']
})
export class UserUpdateComponent implements OnInit {
  user_id:number;
  user:any;
  apiResponse:ApiResponse;

  constructor(private router:Router,private userService:UserService,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.user=new User();
    this.user_id=this.route.snapshot.params['user_id'];
    this.userService.getUserById(this.user_id).subscribe(
      data=>{console.log(data)
      this.user=data;},
      error=>console.error())
  }
  onSubmit()
  {
    
    this.userService.updateUser(this.user_id,this.user).subscribe(
      data=>console.log(data),error=>console.error());
    this.user=new User();
    this.router.navigate(['/users']);
    console.log(this.user);
    alert("user edited successfully");
  }

  list()
  {
    this.router.navigate(['/users']);
  }

}


