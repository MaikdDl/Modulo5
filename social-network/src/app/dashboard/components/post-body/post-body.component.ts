import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import marked from 'marked';

@Component({
  selector: 'sn-post-body',
  templateUrl: './post-body.component.html',
  styleUrls: ['./post-body.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class PostBodyComponent implements OnInit {
  @Input() post;
  content: string;

  constructor() { }

  ngOnInit() {
    this.content = marked(this.post.content);
  }

}
