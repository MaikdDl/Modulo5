import { Component, OnInit, Input } from '@angular/core';

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
