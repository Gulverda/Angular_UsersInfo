import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, UserDetailsComponent],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];
  selectedUserId: number | null = null;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.users = this.userService.getAllUsers();
  }

  selectUser(id: number): void {
    this.selectedUserId = id;
  }
}
