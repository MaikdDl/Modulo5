import { Component, OnInit, Input } from '@angular/core';
import { userInfo } from 'os';

@Component({
  selector: 'sn-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() post;
  @Input() user;

  constructor() { }



  ngOnInit() {
  }

}
