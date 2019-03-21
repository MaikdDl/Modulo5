// import { ViewContainerRef } from "@angular/core";
// import { ChangeDetectorStatus } from "@angular/core/src/change_detection/constants";

import {
  TemplateRef,
  ViewContainerRef,
  OnChanges,
  SimpleChanges,
  Directive
} from '@angular/core';

@Directive({
  selector: '[snIf]'
})

export class IfDirective implements OnChanges {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.snIf.currentValue) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
