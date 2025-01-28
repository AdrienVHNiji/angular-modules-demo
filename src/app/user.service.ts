import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  private users: User[] = [];

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users');
  }

getUserById(id: number) {
  return this.users.find(user => user.id === id);
}

}
