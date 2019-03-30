import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Store } from '@ngxs/store';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, map, filter } from 'rxjs/operators';
import { SearchUsers } from '../../store/friends.actions';

@Component({
  selector: 'sn-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.scss']
})
export class SearchUserComponent implements OnInit {
  @ViewChild('searchInput') input: ElementRef;

  constructor(private store: Store) { }

  ngOnInit() {
    fromEvent(this.input.nativeElement, 'keyup')
      .pipe(
        debounceTime(300),
        map((event: any) => event.target.value),
        filter(text => text.length > 3),
        distinctUntilChanged(),
        switchMap(s => this.store.dispatch(new SearchUsers(s)))
      )
      .subscribe();
  }

  search(event) {
    this.store.dispatch(new SearchUsers(event.target.value));
  }
}
