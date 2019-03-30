import { Component, OnInit, Input } from '@angular/core';
import { faPlusCircle, faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'sn-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss']
})
export class FriendComponent implements OnInit {
  @Input() friend;

  iconAdd = faPlusCircle;
  iconAccept = faPlus;
  iconRemove = faMinus;

  constructor() { }

  ngOnInit() {
  }

  getSearchStatus() {
    if (this.friend.request) {
      if (this.friend.request.confirmedAt === 0) {
        return 'pending';
      } else {
        return 'is-friend';
      }
    }
    return 'not-friend';
  }

}
