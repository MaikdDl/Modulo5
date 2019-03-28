import { Post, PostRequest, Comment } from '../dashboard.models';
import { Error } from 'src/app/error/error.models';

export class GetPosts {
  static readonly type = '[Dashboard] GetPost';
}

export class GetPostsSuccess {
  static readonly type = '[Dashboard] GetPostsSuccess';
  constructor(public posts: Post[]) { }
}

export class GetPostsFailed {
  static readonly type = '[Dashboard] GetPostsFailed';
  constructor(public errors: Error[]) { }
}

export class AddPost {
  static readonly type = '[Posts] AddPost';
  constructor(public postRequest: PostRequest) { }
}

export class AddPostSuccess {
  static readonly type = '[Posts] AddPostSuccess';
  constructor(public post: Post) { }
}

export class AddPostFailed {
  static readonly type = '[Posts] AddPostFailed';
  constructor(public errors: Error[]) { }
}

export class AddComment {
  static readonly type = '[Comment] AddComment';
  constructor(public postId: string, public message: string) { }
}

export class AddCommentSuccess {
  static readonly type = '[Comment] AddCommentSuccess';
  constructor(public comment: Comment, public postId: string) { }
}

export class AddCommentFailed {
  static readonly type = '[Comment] AddCommmentFailed';
  constructor(public errors: Error[]) { }
}