import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { User } from 'src/app/model/user.model';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserCreateComponent } from '../user-create/user-create.component';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  users:any;
  formValue !:FormGroup;
  
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  constructor(private userSerivce:UserService,private router: Router) {
    }

  ngOnInit() {
    this.userSerivce.getUsers().subscribe((res:any)=>{
      this.users=res;
    });

  }

  deleteUser(res:any) {
    console.log(res.user_id);
    this.userSerivce.deleteUser(res.user_id)
    .subscribe({next:(data)=>{console.log(data);
    this.userSerivce.getUsers().subscribe(data=>{this.users=data});}});
    alert("User Deleted Sucesfully");
  }

  
  updateUser(user_id:number){
    this.router.navigate(['update',user_id]);
  }

  

}
