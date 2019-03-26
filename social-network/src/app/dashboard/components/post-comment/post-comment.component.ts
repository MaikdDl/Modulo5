import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sn-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent implements OnInit {
  @Input() comment;
  @Input() user;

  constructor() { }

  ngOnInit() { }

}
