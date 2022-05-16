import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from './user/user-create/user-create.component';
import { UserReadComponent } from './user/user-read/user-read.component';
import { UserUpdateComponent } from './user/user-update/user-update.component';

const routes: Routes = [
  {path:'',redirectTo:'user',pathMatch:'full'},
  {path:'add', component: UserCreateComponent},
  {path:'users', component:UserReadComponent },
  {path:'update/:user_id',component:UserUpdateComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
