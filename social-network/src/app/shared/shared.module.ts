import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SiteLayoutComponent } from './component/site-layout/site-layout.component';
import { SiteLayoutHeaderComponent } from './component/site-layout-header/site-layout-header.component';
import { SiteLayoutFooterComponent } from './component/site-layout-footer/site-layout-footer.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SiteLayoutComponent, SiteLayoutHeaderComponent, SiteLayoutFooterComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  exports: [SiteLayoutComponent, SiteLayoutHeaderComponent, SiteLayoutFooterComponent],
})
export class SharedModule { }
