import { AuthService } from '../services/auth.service';
import { State, Store, StateContext, Action } from '@ngxs/store';
import { Auth } from '../auth.models';
import {
  Login,
  LoginSuccess,
  LoginFailed,
  Register,
  RegisterSuccess,
  RegisterFailed,
  GetUserProfile,
  GetUserProfileSuccess,
  GetUserProfileFailed,
  Logout,
  UpdateUserProfile,
  UpdateUserProfileSuccess,
  UpdateUserProfileFailed
} from './auth.actions';

import { Navigate } from '@ngxs/router-plugin';
import { tap, catchError } from "rxjs/operators";
import { SetErrors } from "src/app/error/store/error.actions";

@State<Auth>({
  name: 'auth',
  defaults: {
    ...JSON.parse(localStorage.getItem('auth'))
  }
})

export class AuthState {
  constructor(private store: Store, private authService: AuthService) { }

  @Action(Login)
  login({ dispatch }: StateContext<Auth>, action: Login) {
    this.authService
      .login(action.login)
      .subscribe(
        data => dispatch(new LoginSuccess(data)),
        error => dispatch(new LoginFailed(error.error))
      );
  }

  @Action(LoginSuccess)
  loginSuccess(
    { patchState, dispatch }: StateContext<Auth>,
    { loginResponse }: LoginSuccess
  ) {
    patchState({ ...loginResponse });

    dispatch(new Navigate(['/wall']));
  }

  @Action(Register)
  register({ dispatch }: StateContext<Auth>, action: Register) {
    return this.authService.register(action.register).pipe(
      tap(() => dispatch(new RegisterSuccess())),
      catchError(error => dispatch(new RegisterFailed(error.error)))
    );
  }

  @Action(GetUserProfile)
  GetUserProfile({ dispatch }: StateContext<Auth>) {
    return this.authService.getUserProfile().pipe(
      tap(profileResponse =>
        dispatch(new GetUserProfileSuccess(profileResponse))
      ),
      catchError(error => dispatch(new GetUserProfileFailed(error.error)))
    );
  }

  @Action(GetUserProfileSuccess)
  GetUserProfileSuccess(
    { patchState }: StateContext<Auth>,
    { profile }: GetUserProfileSuccess
  ) {
    patchState({ ...profile });
  }

  @Action(Logout)
  Logout({ setState, dispatch }: StateContext<Auth>) {
    this.authService.logout();
    setState(null);
    dispatch(new Navigate(['/welcome']));
  }

  @Action(RegisterSuccess)
  RegisterSuccess(ctx: StateContext<Auth>) { }

  @Action(UpdateUserProfile, { cancelUncompleted: true })
  updateUserProfile(
    { dispatch }: StateContext<Auth>,
    { profile }: UpdateUserProfile
  ) {
    return this.authService.updateUserProfile(profile).pipe(
      tap(() => dispatch(new UpdateUserProfileSuccess(profile))),
      catchError(error => dispatch(new UpdateUserProfileFailed(error.error)))
    );
  }

  @Action(UpdateUserProfileSuccess)
  updateUserProfileSuccess(
    { patchState }: StateContext<Auth>,
    { profile }: UpdateUserProfileSuccess
  ) {
    patchState({
      ...profile
    });
  }

  @Action([
    LoginFailed,
    RegisterFailed,
    GetUserProfileFailed,
    UpdateUserProfileFailed
  ])


  @Action([LoginFailed, RegisterFailed, GetUserProfileFailed])
  error({ dispatch }: StateContext<Auth>, { errors }: any) {
    dispatch(new SetErrors(errors));
  }
}
