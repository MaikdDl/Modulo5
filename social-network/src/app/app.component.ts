import { Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { GlobalState } from './shared/state/global.state';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Ola, son Miguel';
  @Select(GlobalState.isFetching) isFetching$;

  constructor() { }

  onClick(event) {
    console.log(event);
  }
}
