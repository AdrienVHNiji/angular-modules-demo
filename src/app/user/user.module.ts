import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './user-list/user-list.component';


@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
