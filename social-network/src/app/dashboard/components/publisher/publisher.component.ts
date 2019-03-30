import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faCaretSquareRight } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'sn-publisher',
  templateUrl: './publisher.component.html',
  styleUrls: ['./publisher.component.scss']
})
export class PublisherComponent implements OnInit {
  @Input() user;
  @Input() placeholder;

  @Output() publish = new EventEmitter();

  content = '';

  publishIcon = faCaretSquareRight;
  constructor() { }

  ngOnInit() { }

  publishStatus() {
    if (!this.content) {
      return;
    }
    this.publish.emit(this.content);
  }

  exploreKeyPressed($event) {
    if ($event.which === 13 && $event.metaKey) {
      this.publish.emit(this.content);
    }
  }
}
