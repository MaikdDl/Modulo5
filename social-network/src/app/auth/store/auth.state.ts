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
  GetUserProfileFailed
} from './auth.actions';

import { Navigate } from '@ngxs/router-plugin';
import { tap, catchError } from "rxjs/operators";

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

  @Action([LoginFailed, RegisterFailed, GetUserProfileFailed])
  loginError(ctx: StateContext<Auth>, { errors }: any) { }

  @Action(RegisterSuccess)
  RegisterSuccess(ctx: StateContext<Auth>) { }

  @Action(RegisterFailed)
  registerError(ctx: StateContext<Auth>, { errors }: any) { }
}
