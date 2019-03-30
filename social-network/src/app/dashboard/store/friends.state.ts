import { State, Store, Selector, Action, StateContext } from "@ngxs/store";
import { AuthService } from 'src/app/auth/services/auth.service';
import { Friends } from '../dashboard.models';
import { FriendsService } from "../services/friends.service";
import {
  GetFriends,
  GetFriendsSuccess,
  GetFriendsFailed,
  AcceptFriendRequestFailed,
  AddFriendFailed,
  GetFriendRequestFailed,
  GetFriendRequests,
  GetFriendRequestsSuccess,
  AcceptFriendRequestsSuccess,
  AddFriend,
  AddFriendSuccess,
  AcceptFriendRequests,
} from './friends.actions';
import { tap, catchError } from 'rxjs/operators';
import { SetErrors } from 'src/app/error/store/error.actions';
import { Logout } from 'src/app/auth/store/auth.actions';

@State<Friends>({
  name: 'friends',
  defaults: {
    friends: [],
    userSearch: [],
    requests: []
  }
})
export class FriendsState {
  constructor(
    private store: Store,
    private authService: AuthService,
    private friendService: FriendsService
  ) { }

  @Selector()
  static getFriendRequests({ requests }: Friends) {
    return requests;
  }
  @Action(GetFriends)
  getFriends({ dispatch }: StateContext<Friends>) {
    return this.friendService.getFriends().pipe(
      tap(friends => dispatch(new GetFriendsSuccess(friends))),
      catchError(error => dispatch(new GetFriendsFailed(error.error)))
    );
  }
  @Action(GetFriendsSuccess)
  getFriendsSuccess(
    { patchState }: StateContext<Friends>,
    { friends }: GetFriendsSuccess
  ) {
    patchState({
      friends
    });
  }
  @Action(GetFriendRequests)
  getFriendRequests({ dispatch }: StateContext<Friends>) {
    return this.friendService.getFriendRequests().pipe(
      tap(requests => dispatch(new GetFriendRequestsSuccess(requests))),
      catchError(error => dispatch(new GetFriendRequestFailed(error.error)))
    );
  }

  @Action(GetFriendRequestsSuccess)
  getFriendRequestsSuccess(
    { patchState }: StateContext<Friends>,
    { requests }: GetFriendRequestsSuccess
  ) {
    patchState({
      requests: requests.filter(request => !request.request.confirmed)
    });
  }

  @Action(AcceptFriendRequests)
  acceptFriendRequest(
    { dispatch }: StateContext<Friends>,
    { uuid }: AcceptFriendRequests
  ) {
    return this.friendService.acceptFriendRequest(uuid).pipe(
      tap(() => dispatch(new AcceptFriendRequestsSuccess(uuid))),
      catchError(error => dispatch(new AcceptFriendRequestFailed(error.error)))
    );
  }

  @Action(AcceptFriendRequestsSuccess)
  acceptFriendRequestSuccess(
    { patchState, getState }: StateContext<Friends>,
    { uuid }: AcceptFriendRequestsSuccess
  ) {
    patchState({
      friends: getState().friends.map(friend => {
        if (friend.uuid === uuid) {
          return {
            ...friend,
            request: {
              ...friend.request,
              confirmedAt: new Date().getTime()
            }
          };
        }
        return friend;
      }),
      requests: getState().requests.filter(request => request.uuid !== uuid)
    });
  }

  @Action(AddFriend)
  addFriend({ dispatch }: StateContext<Friends>, { friend }: AddFriend) {
    return this.friendService.addFriend(friend).pipe(
      tap(() => dispatch(new AddFriendSuccess())),
      catchError(error => dispatch(new AddFriendFailed(error.error)))
    );
  }

  @Action(Logout)
  logout({ setState }: StateContext<Friends>) {
    setState({
      friends: [],
      userSearch: [],
      requests: []
    });
  }

  @Action(AddFriendSuccess)
  addFriendSuccess({ dispatch }: StateContext<Friends>) { }

  @Action([GetFriendRequestFailed, AddFriendFailed, AcceptFriendRequestFailed])
  error({ dispatch }: StateContext<Friends>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }
}


