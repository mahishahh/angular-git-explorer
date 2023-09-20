import { Component } from '@angular/core';
import { GitService } from '../service/git.service';

@Component({
  selector: 'app-gituser',
  templateUrl: './gituser.component.html',
  styleUrls: ['./gituser.component.scss']
})
export class GituserComponent {
  searchText: string = '';
  userList: any[] = [];

  constructor(private gitService: GitService) {
  }

  onSearchUser() {
    this.gitService
      .searchUsers(this.searchText)
      .subscribe((users: any) => {
        this.userList = users.items;
      });
  }

  getUserDetail(userName: string) {
    this.gitService
      .getUserDetail(userName)
      .subscribe((user: any) => {
        let indexToUpdate = this.userList.findIndex(item => item.login === userName);
        console.log(indexToUpdate);
        this.userList[indexToUpdate] = user;

      });
  }
}