import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Friend } from '../dashboard.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class FriendsService {
  constructor(private http: HttpClient) { }

  getFriends() {
    return this.http.get<Friend[]>(`${environment.apiBaseUrl}/user/friends`);
  }

  getFriendRequests() {
    return this.http.get<Friend[]>(
      `${environment.apiBaseUrl}/user/friendrequests`
    );
  }

  acceptFriendRequest(uuid: string) {
    return this.http.post(
      `${environment.apiBaseUrl}/user/friendrequests/accept`,
      {
        uuid
      }
    );
  }

  addFriend(uuid: string) {
    return this.http.post(
      `${environment.apiBaseUrl}/user/friendrequests`, {
        friend: uuid
      }
    );
  }
}