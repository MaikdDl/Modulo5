import { Store, State, StateContext, Action, Selector } from '@ngxs/store';
import { GetPosts, GetPostsSuccess, GetPostsFailed } from './post.actions';
import { Post } from '../dashboard.models';
import { PostService } from "../services/post.service";
import { tap, catchError } from "rxjs/operators";

@State<Post[]>({
  name: 'posts',
  defaults: []
})

export class PostState {

  constructor(private postService: PostService) { }

  @Action(GetPosts)
  getPosts({ dispatch }: StateContext<Post[]>) {
    return this.postService.getWall().pipe(
      tap(posts => dispatch(new GetPostsSuccess(posts))),
      catchError(error => dispatch(new GetPostsFailed(error.error)))
    )

  }

  @Action(GetPostsSuccess)
  GetPostsSuccess(
    { setState }: StateContext<Post[]>,
    { posts }: GetPostsSuccess
  ) {
    setState(
      posts.sort((p1, p2) => {
        return p2.createdAt - p1.createdAt;
      })
    );
  }

  @Action(GetPostsFailed)
  GetPostsFailed(ctx: StateContext<Post[]>, { errors }: GetPostsFailed) {
    console.log(errors)
  }
}