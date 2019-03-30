import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-post-head',
  templateUrl: './post-head.component.html',
  styleUrls: ['./post-head.component.scss']
})
export class PostHeadComponent {
  @Input() post;
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
