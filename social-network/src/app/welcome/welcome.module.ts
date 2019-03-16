import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { SharedModule } from '../shared/shared.module';
import { WelcomeFormsComponent } from './components/welcome-forms/welcome-forms.component';
import { WelcomeHeroComponent } from './components/welcome-hero/welcome-hero.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [WelcomeComponent, WelcomeHeroComponent, WelcomeFormsComponent],
  imports: [
    CommonModule,
    WelcomeRoutingModule,
    SharedModule,
    FontAwesomeModule
  ]
})
export class WelcomeModule { }
