import { Component, OnInit } from '@angular/core';
import { Select } from '@ngxs/store';
import { FriendsState } from '../../store/friends.state';

@Component({
  selector: 'sn-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit {
  @Select(FriendsState.getSearchFriends) friends$;
  constructor() { }

  ngOnInit() {
  }

}
