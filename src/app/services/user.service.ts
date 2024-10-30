import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
  status: string;
  email: string;
  phone: string;
  registrationTime: string; // Format: YYYY-MM-DD HH:mm
  lastLogin: string;        // Format: YYYY-MM-DD HH:mm
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { 
      id: 1, 
      name: 'Alice', 
      status: 'active', 
      email: 'alice@example.com', 
      phone: '123-456-7890', 
      registrationTime: '2024-10-01 08:30', 
      lastLogin: '2024-10-29 09:00' 
    },
    { 
      id: 2, 
      name: 'Bob', 
      status: 'inactive', 
      email: 'bob@example.com', 
      phone: '987-654-3210', 
      registrationTime: '2024-09-15 10:15', 
      lastLogin: '2024-10-28 11:45' 
    },
    { 
      id: 3, 
      name: 'Charlie', 
      status: 'active', 
      email: 'charlie@example.com', 
      phone: '456-789-1234', 
      registrationTime: '2024-08-21 14:50', 
      lastLogin: '2024-10-27 13:30' 
    }
  ];
  

  getAllUsers(): User[] {
    return this.users;
  }

  getUserById(id: number): User | undefined {
    return this.users.find(user => user.id === id);
  }
}
