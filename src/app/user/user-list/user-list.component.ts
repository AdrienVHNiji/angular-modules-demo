import { Component } from '@angular/core';
import { UserService } from '../../user.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-user-list',
  standalone: true, // Indique que ce composant est standalone
  imports: [CommonModule, RouterModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent {
  users: User[] = [];

  constructor(private userService: UserService) {}

    ngOnInit(): void {
      this.userService.getUsers().subscribe((data: User[]) => {
        this.users = data;
      });
    }
  }
