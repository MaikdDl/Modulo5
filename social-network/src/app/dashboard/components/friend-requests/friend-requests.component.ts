import { Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Friend } from 'src/app/auth/auth.models';
import { GetFriendRequests, AcceptFriendRequests } from '../../store/friends.actions';
import { FriendsState } from '../../store/friends.state';

@Component({
  selector: 'sn-friend-requests',
  templateUrl: './friend-requests.component.html',
  styleUrls: ['./friend-requests.component.scss']
})
export class FriendRequestsComponent implements OnInit {
  @Select(FriendsState.getFriendRequests) requests$: Observable<Friend[]>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetFriendRequests());
  }

  acceptRequest({ uuid }: Friend) {
    this.store.dispatch(new AcceptFriendRequests(uuid));
  }

}
