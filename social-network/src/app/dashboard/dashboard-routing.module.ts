

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { WallComponent } from './containers/wall/wall.component';
import { MyaccountComponent } from './containers/my-account/my-account.component';
import { FriendsComponent } from './containers/friends/friends.component';
import { AuthGuard } from '../auth/services/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [AuthGuard],
    children: [{
      path: 'wall',
      component: WallComponent
    },
    {
      path: 'friends',
      component: FriendsComponent
    },
    {
      path: 'my-account',
      component: MyaccountComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
