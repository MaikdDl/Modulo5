import { Component, OnInit } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { GetPosts } from '../../store/post.actions';
import { PostState } from '../../store/post.state';
import { Post } from '../../dashboard.models';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/auth/store/auth.state';
import { Auth } from 'src/app/auth/auth.models';

@Component({
  selector: 'sn-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss']
})
export class WallComponent implements OnInit {

  @Select(PostState) posts$: Observable<Post[]>;
  @Select(AuthState) currentUser$: Observable<Auth>;

  constructor(private store: Store) { }

  ngOnInit() {
    this.store.dispatch(new GetPosts());

  }

}
