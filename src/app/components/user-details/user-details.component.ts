import { Component, Input, OnChanges } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnChanges {
  @Input() userId!: number;
  user: any;

  constructor(private userService: UserService) {}

  ngOnChanges(): void {
    this.user = this.userService.getUserById(this.userId);
  }
}
