import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { CounterIncrement } from './actions/counter.actions';
import { CounterState } from './states/counter.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'comerc';

  @Select(CounterState.count) count$: Observable<number>;

  constructor(private _store: Store) {
  }

  ngOnInit() {
    this._store.dispatch(new CounterIncrement());
    // setTimeout(() => {})
  }
}
