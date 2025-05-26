import { Component, EventEmitter, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedUserName = '';
  selectedUserId?: string;
  anotherUserSelected?: string;
  

get selectedUser() {
    return this.users.find(user => user.id === this.selectedUserId);
  }

  onSelectUser(id: string) {
    this.selectedUserId = id;
    this.anotherUserSelected = this.selectedUser?.name;
    console.log('anotherUserSelected user name ', this.selectedUser?.name);
  }
}
