import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-post-comment',
  templateUrl: './post-comment.component.html',
  styleUrls: ['./post-comment.component.scss']
})
export class PostCommentComponent {
  @Input() comment;
  @Input() user;

  constructor(private router: Router) { }

  navigateToWall(uuid: string) {
    if (uuid !== this.user.uuid) {
      this.router.navigate(['/user', uuid, 'wall']);
    } else {
      this.router.navigate(['/wall']);
    }
  }
}
