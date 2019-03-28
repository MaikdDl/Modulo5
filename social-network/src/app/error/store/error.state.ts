import { State, Action, StateContext } from "@ngxs/store";
import { SetErrors, ResetErrors } from './error.actions';

@State<Error[]>({
  name: 'errors',
  defaults: []
})

export class ErrorState {
  @Action(SetErrors)
  SetErrors({ setState }: StateContext<Error[]>, { errors }: SetErrors) {
    setState(errors);
  }

  @Action(ResetErrors)
  ResetErrors({ setState }: StateContext<Error[]>) {
    setState([]);
  }
}