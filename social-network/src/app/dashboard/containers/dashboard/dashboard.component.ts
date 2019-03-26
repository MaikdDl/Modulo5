import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { GetUserProfile } from 'src/app/auth/store/auth.actions';

@Component({
  selector: 'sn-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetUserProfile());
  }
}
