import { Action, Selector, State, StateContext } from '@ngxs/store';
import { getSavedStoreOptions } from '../_shared/utils/get-saved-store-options.util';
import { CounterIncrement } from '../actions/counter.actions';

export interface CounterStateModel {
  count: number;
}

const defaults: CounterStateModel = {
  count: 0
};

@State(getSavedStoreOptions('counters', defaults))
export class CounterState {
  @Action(CounterIncrement)
  increment({ getState, setState }: StateContext<CounterStateModel>) {
    const state = getState();
    setState({
      ...state,
      count: state.count + 1
    });
  }

  @Selector()
  static count(state: CounterStateModel): number {
    return state.count;
  }
}
