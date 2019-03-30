import { State, Selector, Action, StateContext } from "@ngxs/store";
import { LoginSuccess, RegisterSuccess, UpdateUserProfileSuccess, LoginFailed, RegisterFailed, UpdateUserProfileFailed } from 'src/app/auth/store/auth.actions';
import { AddPostSuccess, AddCommentSuccess, AddPostFailed, AddCommentFailed } from 'src/app/dashboard/store/post.actions';
import { Global } from '../shared.models';

@State<Global>({
  name: 'global',
  defaults: {
    isFetching: false
  }
})

export class GlobalState {
  @Selector()
  static isFetching({ isFetching }: Global) {
    return isFetching;
  }

  @Action([
    LoginSuccess,
    RegisterSuccess,
    AddPostSuccess,
    AddCommentSuccess,
    UpdateUserProfileSuccess,
    LoginFailed,
    RegisterFailed,
    AddPostFailed,
    AddCommentFailed,
    UpdateUserProfileFailed
  ])
  endFetching({ patchState }: StateContext<Global>) {
    patchState({ isFetching: false });
  }
}