import { Component, Input } from "@angular/core";

@Component({
  selector: 'sn-avatar',
  template: `
  <img
    *ngIf="imageUrl"
    [src]="imageUrl"
    [ngStyle]="{ width: width, height: height, 'min-width': width }"
    />
  `,
  styles: [
    `
    img {
      border-radius: 50%;
    }
    `
  ]
})

export class AvatarComponent {
  imageUrl = '';

  @Input()
  set user(user: any) {
    if (user.avatarUrl !== undefined) {
      this.imageUrl =
        user.avatarUrl || `https://api.adorable.io/avatars/128/${user.uuid}`;
    }
  }

  @Input() width = 'auto';
  @Input() heigth = 'auto';
}