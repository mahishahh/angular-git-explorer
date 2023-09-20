import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GitService {
  constructor(private http: HttpClient) { }

  // Search users
  searchUsers(searchText: string) {
    return this.http.get(`https://api.github.com/search/users?q=${searchText} in:login type:user&per_page=100`);
  }

  // Get single user
  getUserDetail(username: string) {
    return this.http.get(`https://api.github.com/users/${username}`);
  }
}
