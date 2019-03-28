import { Component } from '@angular/core';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { Logout } from 'src/app/auth/store/auth.actions';
import { Store } from "@ngxs/store";

@Component({
  selector: 'sn-dashboard-nav',
  templateUrl: './dashboard-nav.component.html',
  styleUrls: ['./dashboard-nav.component.scss']
})
export class DashboardNavComponent {

  constructor(private store: Store) { }
  logoutIcon = faSignOutAlt;

  logoutUser() {
    this.store.dispatch(new Logout());
  }
}
