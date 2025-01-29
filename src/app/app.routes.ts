import { Routes } from '@angular/router';
import { UserListComponent } from './user/user-list/user-list.component';

export const appRoutes: Routes = [
  { path: '', component: UserListComponent }, // Route par défaut
];