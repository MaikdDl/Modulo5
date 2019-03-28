import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngxs/store';
import { AddComment } from '../../store/post.actions';

@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post;
  @Input() user;

  constructor(private store: Store) { }

  addComment(message) {
    this.store.dispatch(new AddComment(this.post.id, message));
  }

  ngOnInit() {
  }

}
