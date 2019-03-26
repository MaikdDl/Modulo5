import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sn-post-head',
  templateUrl: './post-head.component.html',
  styleUrls: ['./post-head.component.scss']
})
export class PostHeadComponent implements OnInit {
  @Input() post;
  @Input() user;

  constructor() { }

  ngOnInit() { }

}
