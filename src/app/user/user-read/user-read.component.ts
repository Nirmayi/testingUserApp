import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { ApiResponse } from 'src/app/model/api.response';
import { User } from 'src/app/model/user.model';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { UserCreateComponent } from '../user-create/user-create.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http'; 
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-read',
  templateUrl: './user-read.component.html',
  styleUrls: ['./user-read.component.css']
})
export class UserReadComponent implements OnInit {
  users:any;
  search:string;
  asc:boolean=false;
  dtOptions:DataTables.Settings={};
  dtTrigger:Subject<any>=new Subject();
  isDtInitialized:boolean=false;
  user_id:number;
  baseUrl:string='https://61ece709f3011500174d2245.mockapi.io/nb/getUsers/';
  public temp:Object=false;
  
  //dtOptions: DataTables.Settings = {};
  //@ViewChild('dtOptions', {static: true}) table;

  constructor(private userSerivce:UserService,private router: Router,private http: HttpClient) {
    }

  ngOnInit():void {
    this.userSerivce.getUsers().subscribe((res:any)=>{
      this.users=res;
    });
    this.http.get(this.baseUrl).subscribe({next:(data)=>{
      this.users=data;
      this.temp=true;
    }})

  }

  deleteUser(res:any) {
    console.log(res.user_id);
    this.userSerivce.deleteUser(res.user_id)
    .subscribe({next:(data)=>{console.log(data);
    this.userSerivce.getUsers().subscribe(data=>{this.users=data});}});
    alert("User Deleted Sucesfully");
  }

  
  updateUser(user_id:number):void{
    this.router.navigate(['update',user_id]);
  }

  

}
