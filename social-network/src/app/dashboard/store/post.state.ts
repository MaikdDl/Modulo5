import { Store, State, StateContext, Action, Selector } from '@ngxs/store';
import {
  GetPosts,
  GetPostsSuccess,
  GetPostsFailed,
  AddPost,
  AddPostSuccess,
  AddPostFailed,
  AddCommentFailed,
  AddComment,
  AddCommentSuccess,
  Like,
  LikeSuccess,
  LikeFailed
} from './post.actions';
import { Post } from '../dashboard.models';
import { PostService } from "../services/post.service";
import { tap, catchError } from "rxjs/operators";
import { SetErrors } from "src/app/error/store/error.actions";
import { Logout } from 'src/app/auth/store/auth.actions';
import { Navigate } from '@ngxs/router-plugin';

@State<Post[]>({
  name: 'posts',
  defaults: []
})

export class PostState {

  constructor(private postService: PostService, private store: Store) { }

  @Action(GetPosts)
  getPosts({ dispatch }: StateContext<Post[]>, { userId }: GetPosts) {
    return this.postService.getWall(userId).pipe(
      tap(posts => dispatch(new GetPostsSuccess(posts))),
      catchError(error => dispatch(new GetPostsFailed(error.error, userId)))
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

  @Action(AddPost)
  addPost({ dispatch }: StateContext<Post[]>, { postRequest }: AddPost) {
    const currentUser = this.store.selectSnapshot(state => state.auth);

    return this.postService.addPost(postRequest.content).pipe(
      tap(post =>
        dispatch(
          new AddPostSuccess({
            ...post,
            author: currentUser,
            owner: currentUser
          })
        )
      ),
      catchError(error => dispatch(new AddPostFailed(error.error)))
    );
  }

  @Action(AddPostSuccess)
  addPostSuccess(
    { setState, getState }: StateContext<Post[]>,
    { post }: AddPostSuccess
  ) {
    setState([post, ...getState()]);
  }

  @Action(AddComment)
  AddComment(
    { dispatch }: StateContext<Post[]>,
    { postId, message }: AddComment
  ) {
    const currentUser = this.store.selectSnapshot(state => state.auth);

    return this.postService.addComment(postId, message).pipe(
      tap(() =>
        dispatch(
          new AddCommentSuccess(
            {
              id: this.uuidv4(),
              message,
              author: currentUser,
              createdAt: new Date().getTime()
            },
            postId
          )
        )
      ),
      catchError(error => dispatch(new AddPostFailed(error.error)))
    );
  }

  @Action(AddCommentSuccess)
  AddCommentSuccess(
    { setState, getState }: StateContext<Post[]>,
    { comment, postId }: AddCommentSuccess
  ) {
    setState(
      getState().map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [comment, ...post.comments]
          };
        }
        return post;
      })
    );
  }

  @Action(Like, { cancelUncompleted: true })
  Like({ dispatch, getState }: StateContext<Post[]>, { postId }: Like) {
    const post = getState().find(p => p.id === postId);
    const currentUser = this.store.selectSnapshot(state => state.auth);

    if (post) {
      if (post.likes.indexOf(currentUser.uuid) === -1) {
        return this.postService.like(postId).pipe(
          tap(() => dispatch(new LikeSuccess(postId, true, currentUser.uuid))),
          catchError(error => dispatch(new LikeFailed(error.error)))
        );
      } else {
        return this.postService.dislike(postId).pipe(
          tap(() => dispatch(new LikeSuccess(postId, false, currentUser.uuid))),
          catchError(error => dispatch(new LikeFailed(error.error)))
        );
      }
    }
  }

  @Action(LikeSuccess)
  likeSuccess(
    { getState, setState }: StateContext<Post[]>,
    { postId, isLike, userUuid }: LikeSuccess
  ) {
    setState(
      getState().map(post => {
        if (post.id === postId) {
          return {
            ...post,
            likes: isLike
              ? [...post.likes, userUuid]
              : post.likes.filter(uuid => uuid !== userUuid)
          };
        }
        return post;
      })
    );
  }

  @Action([GetPostsFailed])
  getPostsFailed({ dispatch }: StateContext<Post[]>, { errors, uuid }: any) {
    if (errors && errors.filter(error => error.status === 403).length > 0) {
      dispatch(new Navigate(['/user', uuid, 'private', 'wall']));
    } else {
      dispatch(new SetErrors(errors));
    }
  }

  @Action(Logout)
  Logout({ setState }: StateContext<Post[]>) {
    setState(null);
  }

  @Action([AddPostFailed, AddCommentFailed, LikeFailed])
  error({ dispatch }: StateContext<Post[]>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }

  private uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      // tslint:disable-next-line
      let r = (Math.random() * 16) | 0, // tslint:disable-line
        v = c == 'x' ? r : (r & 0x3) | 0x8; // tslint:disable-line
      return v.toString(16);
    });
  }
}