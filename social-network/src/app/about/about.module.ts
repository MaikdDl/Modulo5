

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutComponent } from './component/about/about.component';
import { AboutRoutingNModule } from './about-routing-module';


@NgModule({
  imports: [CommonModule, AboutRoutingNModule],
  declarations: [AboutComponent]
})

export class AboutModule {

}