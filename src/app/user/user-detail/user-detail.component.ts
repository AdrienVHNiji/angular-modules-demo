import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.scss'
})
export class UserDetailComponent implements OnInit{
  userId: string | null = null;

  constructor(private route: ActivatedRoute) {}
  
  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
  }

}
